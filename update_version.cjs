const fs = require('fs');
const path = './package.json';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/"version": "0\.1\.3"/, '"version": "0.1.4"');

fs.writeFileSync(path, content);
console.log('package.json version updated to 0.1.4');
