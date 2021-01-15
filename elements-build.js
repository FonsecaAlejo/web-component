const fs = require('fs-extra');  
const concat = require('concat');

(async function build() {
    const files = [
        './dist/emision/runtime.js',
        './dist/emision/polyfills.js',
        './dist/emision/scripts.js',
        './dist/emision/main.js'
    ];

    await fs.ensureDir('elements');
    await concat(files, 'elements/emision-elements.js');
    await fs.copyFile(
        './dist/emision/styles.css',
        'elements/emision-style.css'
    );
})();