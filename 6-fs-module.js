const { readFileSync, writeFileSync } = require("fs");
// readfile
const first = readFileSync("./content/first.txt", "utf8");
console.log(first);
// writefile
writeFileSync(`./content/result.txt`, `${first},  Nani!`, { flag: `a` });
