# RISC-V ISA Explorer

[![Website Status](https://img.shields.io/badge/website-up-brightgreen)](https://yourusername.github.io/your-repository-name/)

This interactive web tool allows you to explore the RISC-V Instruction Set Architecture (ISA) by entering an ISA string (e.g., RV32IMACF, RV64GC, Zicsr_Zifencei).  It provides detailed information about the base ISA and its extensions, including:

*   **Descriptions:**  Human-readable explanations of what each part of the ISA string means.
*   **Versions:**  The version number of each extension.
*   **Status:**  Whether the extension is Ratified, Open, or Frozen.
*   **Instruction Count:** (Where applicable) The number of instructions added by the extension.

The tool supports a wide variety of standard RISC-V extensions, covering integer operations, floating-point arithmetic, atomic operations, compressed instructions, and "Z" extensions.

**Try it out!** [https://sc20ka.github.io/riscv-isa/](https://sc20ka.github.io/riscv-isa/)  *(Replace this with your actual GitHub Pages URL)*

## Features

*   **Interactive Decoding:** Simply type in a RISC-V ISA string and get instant results.
*   **Comprehensive Information:**  Learn about the different components of the RISC-V ISA.
*   **User-Friendly Interface:** Clean and easy-to-understand presentation.
*   **Open Source:**  The code is available on GitHub and contributions are welcome!

## How to Use

1.  **Go to the website:** [https://sc20ka.github.io/riscv-isa/](https://sc20ka.github.io/riscv-isa/) *(Remember to update this link!)*
2.  **Enter a RISC-V ISA String:** Type the ISA string into the input field (e.g., `RV32IMAC`, `RV64GC`, `Zicsr_Zam`).
3.  **Click "Get Details":**  The tool will parse the string and display the relevant information.

## Technologies Used

*   **HTML:**  For the structure of the web page.
*   **CSS:**  For styling the appearance.
*   **JavaScript:** For handling user input, fetching data, and displaying results.
*   **JSON:**  To store the RISC-V ISA data in a structured format (`data.json`).

## Local Development

If you want to run the project locally or contribute to its development:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/your-repository-name.git  # Replace with your repo URL
    cd your-repository-name
    ```

2.  **Open `index.html` in your browser:**  You can simply double-click the `index.html` file.  No local server is required for this simple project.

## Contributing

Contributions are welcome! If you find bugs, have feature requests, or want to improve the code, please feel free to open an issue or submit a pull request.  See [CONTRIBUTING.md](CONTRIBUTING.md) (to be created) for guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file (to be created) for details.

## Acknowledgements

This project uses information from the official RISC-V specifications.

#riscv #isa #instructions #architecture #opensource #cpu #embedded #computerarchitecture
