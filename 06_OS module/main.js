const os = require("os")

//get architecture of your system
console.log(os.arch());

//get host name
console.log(os.hostname());

//get name of platform
console.log(os.platform());

//get name of OS
console.log(os.type());

//get the path of temporary directory
console.log(os.tmpdir());

//get total memory of your system
const totalMemory = os.totalmem() //return memory in bytes
console.log(`${totalMemory / 1024 / 1024 / 1024}`);

//get free memory of your system
const freeMemory = os.freemem() //return memory in bytes
console.log(`${freeMemory / 1024 / 1024 / 1024}`);