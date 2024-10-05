const os = require("os");
// current user info
const user = os.userInfo();
// returs system uptime in seconds
// console.log(`system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};
console.log(currentOS);
