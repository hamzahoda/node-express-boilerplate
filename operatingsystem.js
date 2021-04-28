const os = require("os")

var freememory = os.freemem();
var totalmemory = os.totalmem();

console.log("Free memory",freememory)
console.log("Total memory",totalmemory)
