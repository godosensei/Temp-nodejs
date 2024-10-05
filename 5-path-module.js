const path = require("path");
// join path method
const filepath = path.join("/content", "subfolder", "tst.txt");
console.log(filepath);
// get the basefile name
const base = path.basename(filepath);
console.log(base);
// get full/absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "tst.txt");
console.log(absolute);
