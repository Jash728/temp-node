const path = require('path');
console.log(path.sep);

const filePath = path.join('/js_nudgets/','map.js');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, '/js_nudgets/','map.js');
console.log(absolute);