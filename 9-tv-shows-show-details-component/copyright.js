const Path = require("path");
const fs   = require("fs");

const licenseHeader = `/*******************************************************************************
* Copyright (c) {2003-2021} Murex S.A.S. and its affiliates.
* All rights reserved. This program and the accompanying materials
* are made available under the terms of the MIT License
* which accompanies this distribution, and is available at
* https://opensource.org/licenses/MIT
*******************************************************************************/`;


function searchFiles(directory) {
    fs.readdirSync(directory).forEach(File => {
        const filePath = Path.join(directory, File);
        if (fs.statSync(filePath).isDirectory()) return searchFiles(filePath);
        else {
            const fileExtension = Path.extname(filePath);
            if(fileExtension !== '.json') {
                const originalContent =  fs.readFileSync(filePath, 'utf-8');
                let contentWithLicense = `${licenseHeader}\n${originalContent}`;

                if(fileExtension === '.html') {
                    contentWithLicense = `<!-- ${licenseHeader} -->\n${originalContent}`;
                }

                fs.writeFileSync(filePath, contentWithLicense);
            }

        }
    });
}

searchFiles('src')

// lines = [];


// function generateCommands(incrementName, srcRoot) {
// lines.push(`git checkout main`);
// lines.push(`git checkout -b ${incrementName}`);
// lines.push(`cp -r '${srcRoot}/${incrementName}' .`);
// lines.push(`git add .`);
// lines.push(`git commit -m "adding ${incrementName} increment"`);
// lines.push(`git push --set-upstream-to origin/${incrementName}`);
// lines.push(`\n\n\n`);
// }

// function saveCommands() {
// fs.writeFileSync('commands.txt', lines.join('\n'));
// }

// fs.readdirSync(".").filter(f => f != "copyright.js").forEach(d => generateCommands( d, 'D:/AUB Workshop/increments'))
// saveCommands()
