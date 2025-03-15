document.getElementById('submitButton').addEventListener('click', getISADetails);

async function getISADetails() {
    const isaString = document.getElementById('isaInput').value.trim().toUpperCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    if (!isaString) {
        resultsDiv.innerHTML = '<p>Please enter a RISC-V ISA string.</p>';
        return;
    }

    try {
        const response = await fetch('data.json');
        const data = await response.json();

        const isaDetails = parseISAString(isaString, data);

        if (isaDetails.length === 0) {
            resultsDiv.innerHTML = '<p>No matching extensions found or invalid ISA string.</p>';
        } else {
            displayISADetails(isaDetails, resultsDiv);
        }

    } catch (error) {
        resultsDiv.innerHTML = `<p>Error fetching data: ${error}</p>`;
    }
}
function parseISAString(isaString, data) {
    const extensions = [];
    // Start by checking for base ISA (RV32I, RV64I, RV32E, RV64E, RV128I)
    const baseRegex = /^(RV32I|RV64I|RV32E|RV64E|RV128I)/;
    const baseMatch = isaString.match(baseRegex);

    if (baseMatch) {
        const base = baseMatch[0];
        if (data.bases[base]) {
             extensions.push(data.bases[base]);
        }

        // Now process extensions.  Handle "Z" extensions and single-letter extensions.
        let remainingString = isaString.substring(base.length);

        //handle G
        const gRegex = /G/;
        const gMatch = remainingString.match(gRegex);
        if (gMatch) {
          if (data.extensions['G']) {
            extensions.push(data.extensions['G']);
          }
          remainingString = remainingString.replace(/G/, '');
        }


        // Handle Z extensions (e.g., Zicsr, Zifencei, Zam)
        const zRegex = /Z[a-zA-Z0-9]+/g; // Match Z followed by letters/numbers
        let zMatch;
        while ((zMatch = zRegex.exec(remainingString)) !== null) {
            const zExtension = zMatch[0];
            if (data.extensions[zExtension]) {
                extensions.push(data.extensions[zExtension]);
            }
            remainingString = remainingString.replace(zExtension, ''); //remove matched Z to prevent endless loop
        }
         // Remove underscores.
        remainingString = remainingString.replace(/_/g, '');

        // Handle single-letter extensions (M, A, F, D, C, etc.)
        const singleLetterRegex = /[MAFDCQLBJVTPN]/g;  // Add other single-letter extensions
        let singleLetterMatch;
        while ((singleLetterMatch = singleLetterRegex.exec(remainingString)) !== null) {
            const singleLetterExt = singleLetterMatch[0];
              if (data.extensions[singleLetterExt]) {
                extensions.push(data.extensions[singleLetterExt]);
            }
        }
    }
    return extensions;
}
function displayISADetails(isaDetails, resultsDiv) {
    isaDetails.forEach(ext => {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${ext.name}</strong>: ${ext.description} (Version: ${ext.version}, Status: ${ext.status})`;
        resultsDiv.appendChild(p);
    });
}