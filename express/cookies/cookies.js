const express = require("express")
const cookieParser = require("cookie-parser")

const app = express()

app.use(cookieParser())

app.get("/",function(req,res){
    res.cookie("myFirstCookie", "Looks Good");
    res.send("Cookies....!"); //check in browser document.cookie
})

app.get("/clearCookie",function(req,res){
    res.clearCookie("myFirstCookie")
    res.send("Cookies removed")
})

app.listen(3002,function(){
    console.log(`expressserver started on: http://localhost:3002`)
})

// server ki taraf se client ke pass kuch data rakhna is called Cookies
