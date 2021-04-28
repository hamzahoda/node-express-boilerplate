var http = require('http')
var fs = require("fs")

// also showing client side url facing 

http.createServer(function(request,response){
    console.log("request",request.url)
    // html render file se nikal ke direct 
    fs.readFile("demofile1.html",function(err,data){
        response.writeHead(200,{"Content-Type":"text/html"})
        response.write(data)
        response.end()
    })
}).listen(8080)