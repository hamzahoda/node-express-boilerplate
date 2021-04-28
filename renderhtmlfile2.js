var http = require('http')
var fs = require("fs")


function sendFile(path,res,mime){
    fs.readFile(path,function(err,data){
        if(err){
            // error handling(err,res)
            return
        }
        res.writeHead(200,{"Content-Type":mime})
        res.end(data.toString(data))
    })
}

http.createServer(function(req,res){
    if(req.url == '/demoscript.js'){
        sendFile('./demoscript.js',res,'text/javascript')
        return
    }
    fs.readFile("demofile1.html",function(err,data){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(data)
        res.end()
    })
}).listen(8080)


// aese server bana meihar request khd handle karna part hai like image ki request tou image send
// css ki request tou css file send js ki request tou js file send html ki request tou html send
//  express kaam assan kar deti hai