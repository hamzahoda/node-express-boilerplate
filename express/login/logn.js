const express = require('express');
const bodyParser = require('body-parser');

// library install session ke liye jo session maintain karega 
const sessions = require("express-session");


// client se server baat tou bech mei session create 
// woh jab tak rehta hai jab tak tab open app close tou session close


var session;

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlendcoded({
    extended:true
}))

// app.use middle ware isme session create

// isme aur bhi cheezein pass karna chayein as an object kar sakte hain

app.use(sessions({
    secret:"&jh&B7H8^&^&*&^76FG&^f",
    resave:false,
    saveUninitialized:true
}));

// static folder
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.sendFile("index.html",{
        root:__dirname
    });
});

app.get("/login", function(req, res){
    session = req.session;
//    agar unique id hai tou already login redirect 
    if(session.uniqueID){
        res.redirect("/redirects");
}else{
    res.sendFile("login.html",{
        root:__dirname
    });
}
});

app.post('/login',function(req,res){
    session = req.session;
    
    // ye sahitareeka nahi hai abhi server aur client sath chal rahe hain isliye kia
    //  real life mei database se get
    if(req.body.username == 'admin' && req.body.password == 'admin'){
        session.uniqueID = req.body.username
    }
    res.redirect('/redirects');
});
app.get("/redirects",function(req,res){
    session = req.session;
    if(session.uniqueID){
        res.redirect("/admin");
    }else{
        res.send("who are you??");
    }
});

app.get("/admin", function(req, res){
    session = req.session;
    if(session.uniqueID){
        res.send("Wow you are Admin.....!! <a href='/logout'>Logout</a>")
    }else{
        res.send("who are you??");
    }
   
})
