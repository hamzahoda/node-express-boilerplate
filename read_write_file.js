var fs = require("fs")

function readFile(srcPath){
    fs.readFile(srcPath,'utf8',function(err,data){
        (err) ? console.log("Read Error",err):console.log("Read",data)
    })
}


function writeFile(savePath,data){
    fs.writeFile(savePath,data,function(err){
        (err) ? console.log("Write Error",err):console.log("Write succesful",data)
    })
}

function appendFile(savePath,data){
    fs.appendFile(savePath,data,function(err){
        (err) ? console.log("Append Error",err):console.log("Append succesful",data)
    })
}

// writeFile('./abc.txt',"abc is my first file")
// readFile('./abc.txt')
appendFile('./abc.txt',"abc is append to my first file")
