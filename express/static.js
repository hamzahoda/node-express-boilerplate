var express = require("express")

var app = express()
// jahan deploy wahan process env port milta hai server side deployment type
app.set("port",process.env.PORT || 3000)

// static folder css, js html file
app.use("/public",express.static(__dirname + '/public'))

// application mei get ki request aye slash pe tou send karna hai ye
// pheley htttp mei if condition laga ke url catch karna parta tha useke baad response

app.get('/',function(req,res){
    res.send("Express works");

    // to send file 
    // res.sendFile("index.html",{root:__dirname})
    // res.sendFile(__dirname+'/public/index.html')
})
// isme direct json bhej sakte hai
// express use tou uske response mei .json milna shuru
// send mei direct html ya string bhej don aur end() bhi khod
// hojata hai res.send ya res.json
app.get('/users',function(req,res){
    res.json([{id:1, name:"john"}, {id:2, name:"Doe"}, {id:3, name:"ali"}])
})

// app listen port diya aur call back jese serever run hoga ye console print hojayega
// res.send aur res.json mei khod end explicitly nahi batana hota

app.listen(app.get("port"),function(){
    console.log(`express started on: http://localhost:${app.get('port')}`)
})