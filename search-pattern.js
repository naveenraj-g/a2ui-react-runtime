const fs = require('fs');
const path = require('path');

function searchForPattern(dir, pattern) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            searchForPattern(filePath, pattern);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            const content = fs.readFileSync(filePath, 'utf8');
            if (content.match(pattern)) {
                console.log(`Found pattern in: ${filePath}`);
            }
        }
    }
}

// Search for patterns that might be related to the error
searchForPattern('.', /m:.*Set/);
searchForPattern('.', /new Set/);
searchForPattern('.', /Set\s*\(/);
