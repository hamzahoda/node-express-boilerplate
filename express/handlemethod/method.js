const express = require("express")
const bodyParser = require("body-parser")
const http = require("http")

const app =express()

app.set("port",process.env.PORT || 3002)



// express mei middleware very imp
// middleware client se request jati aur server par poocnhne se pheley
//beech ki jaga ya layer is called middleware
// app.use middleware hai jab bhi koi request ayegi uske beech mei

// bodyparser add kardega iski maddad se server se jo bhi data mill
//raha hoga directly req.body mei use karsakte hain
// warna pheley on data pe data lena parta aur hamne on end pe milta tha
// server.js mei howa hai aesa
// post mei assani

// app.use(bodyParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// get isme koi cheez parse nahi karni par rahi agar khali res.json kardon
// as a json print kardega 
app.get("/",function(req,res){
    res.end(JSON.stringify(req.query)) //try: localhost:3000/?email=abc@gmail.com
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