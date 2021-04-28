var http =require("http")
var fs = require('fs')
var qs = require('querystring')

const usersList = [{id:1, name:"abc"}, {id:2, name:"xyz"}]


http.createServer(function(req,res){
    if(req.url == '/users' && req.method == "GET"){
        res.write(JSON.stringify(usersList))
        res.end()
        return;
    }

    if(req.url == '/user' && req.method == "POST"){
        var body = ''
        req.on("data",function(data){
            body +=data
            //1e6 ===1 * Math.pow(10, 6) ===1 * 100000 -----1mb
            if(body.length > 1e6){
                // floodattack or faulty client, nuke request 
                request.connection.destroy()
            }
        })
        req.on("end",function(){
            console.log("body",body)
            var POST = qs.parse(body)
            console.log("POST",POST)
            res.write(JSON.stringify(POST))
            res.end()
        })
        return
    }

    if(req.url == '/user' && req.method == "GET"){
        res.write("My user information")
        res.end()
        return
    }

    if(req.url.indexOf('/user/') > -1 && req.method =="GET"){
        var id = req.url.replace('/user/','')
        res.write('show user information which have id'+id)
        res.end()
        return
    }

    if (req.url == '/'){
        fs.readFile('index.html', function(err, data){
            res.writeHead(200, {'Content-Type':"text/html"})
            res.write(data)
            res.end()
        })
        return
    }

    res.writeHead(200, {"Content-Type":"text/html"})
    res.write("Invalid Route");
    res.end()

}).listen(8080)