const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '../test/screenshots');

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });  // recursive: true to create nested folders if needed
}
