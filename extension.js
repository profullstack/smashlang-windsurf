// This is a minimal extension.js file
// It doesn't need to do anything since we're just providing syntax highlighting

function activate(context) {
    // Extension is activated
    console.log('SmashLang extension is now active');
}

function deactivate() {
    // Extension is deactivated
}

module.exports = {
    activate,
    deactivate
};
