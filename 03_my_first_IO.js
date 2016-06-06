var fs = require ('fs');
var filename = process.argv[2];
file = fs.readFileSync(filename);
filecontents = file.toString();
console.log(filecontents.split('\n').length - 1);
