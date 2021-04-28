const mongoose = require("mongoose");
const addUser = require("./createUser");
const User = require("./userModel")


mongoose.connect("mongodb+srv://admin:admin@cluster0.xo36w.mongodb.net/testdb?retryWrites=true&w=majority" ,{useNewUrlParser: true});


mongoose.connection
    .once('open', ()=>{
        console.log("Yahoo! connection is Establiched");
        // add user called on connection
        addUser()
    })
    .on("error",(err)=>{
        console.log("Err:",err);
    })


    const express = require("express")
    const bodyParser = require("body-parser")
    const http = require("http")
    
    const app =express()
    
    app.set("port",process.env.PORT || 3002)
    
    
    
   
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))
    
    // get isme koi cheez parse nahi karni par rahi agar khali res.json kardon
    // as a json print kardega 
    app.get("/users",function(req,res){
        User.findOne({name:"Doe"})
        .then((users)=>{
            // return array
            console.log("Users",users);
            res.json(users)
        })
        .catch((err)=>console.log("Err", err));

    })
    
    // post mei form data jata hai www agar postman use xform
    // post mei data url mei nahi body mei pack hokar jata hai
    app.post("/",(req,res)=>{
        console.log(req.body)
        res.end(JSON.stringify(req.body))
    })
    
    // app.put
    // app.delete
    
    app.listen(app.get("port"),function(){
        console.log(`express started on: http://localhost:${app.get('port')}`)
    })