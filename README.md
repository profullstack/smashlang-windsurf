# SmashLang for Windsurf

This extension provides syntax highlighting for SmashLang (.smash) files in Windsurf.

## Features

- Syntax highlighting for SmashLang source code
- Support for SmashLang keywords, functions, and operators
- Comment toggling (line and block comments)
- Bracket matching and auto-closing

## Installation

### Local Installation

To install the extension in Windsurf:

1. Open Windsurf
2. Go to Extensions view (View → Extensions or press Cmd+Shift+X)
3. Click on the "..." menu (three dots) at the top of the Extensions view
4. Select "Install from VSIX..."
5. Navigate to the location where you've packaged this extension as a .vsix file and select it

### Creating a VSIX Package

To create a VSIX package from this extension:

1. Install vsce: `npm install -g vsce`
2. Navigate to the extension directory
3. Run: `vsce package`
4. This will generate a .vsix file that you can install in Windsurf

## Usage

Once installed, Windsurf will automatically use this extension for any files with the `.smash` extension.

## Supported Language Features

- Keywords: `fn`, `if`, `else`, `while`, `for`, `return`, etc.
- String literals (single quotes, double quotes, and template literals)
- Comments (line and block comments)
- Function declarations and calls
- Variable declarations
- Constants and numeric literals
- Operators
- Regular expressions

## License

MIT
