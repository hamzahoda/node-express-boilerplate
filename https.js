// data intensive and real time application
// server client wala game araha hai

// sab se pheley http server banega kionke server ho ga tou routes aur api banegi 

var http = require('http');
var courses = [{id:1, name: "js"}, {id:2, name:"node"}];
var users = ['userA', 'userB'];

var server = http.createServer(function(request,response){
    // console.log("got a request",request)
    console.log("got a request",request.url)


    if(request.url === '/api/courses'){
        response.write(JSON.stringify(courses))
        response.end()
    }else if(request.url === "/api/users"){
        response.write(JSON.stringify(users))
        response.end()
    }else{
        // response.write("Hello world :)");
        // set header 
        response.writeHead(200,{"Content-type": "text/html"})

        response.write("<h1>Hello world :)</h1><h2>"+request.url+"</h2>");

        response.end()
    }


}).listen(3001)









