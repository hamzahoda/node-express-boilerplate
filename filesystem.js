var fs = require('fs');

// // sync
// console.log("SYNC 1");
// var files = fs.readdirSync('./');
// console.log("SYNC 2",files)

// Async
console.log("ASYNC 1");
fs.readdir('./',function(err,files){
    if(err){
        console.log(err)
    }else{
        console.log(files)
    }
})
console.log("ASYNC 2")