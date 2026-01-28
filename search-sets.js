const fs = require('fs');
const path = require('path');

function searchForSets(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            searchForSets(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            const content = fs.readFileSync(filePath, 'utf8');
            if (content.includes('new Set')) {
                console.log(`Found Set in: ${filePath}`);
            }
        }
    }
}

searchForSets('.');
