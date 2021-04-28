const express = require("express")

const app = express()

// multiple files pe kaam tou yahan import kareinge

const router1 = express.Router();
const router2 = express.Router();
const router3 = express.Router();


router1.get("/",(req,res) => res.send("API is Live!"));
router1.get("/user",(req,res) => res.send("User calling!"));
router1.get("/group",(req,res) => res.send("group calling!"));
router1.get("/post",(req,res) => res.send("post calling!"));

// colon ke sath jo bhi ayega iska matlab woh dynamic hai 
//request .params /user/abc abc param hai
//query string ? ke baad hoti hai 
router2.get("/:username",(req,res) => res.send(JSON.stringify(req.params)));

router3.get("/",(req,res) => res.send("Api is updated"));


app.use("/apiV1",router1)
app.use("/apiV2",router3)
app.use('/users',router2)


app.get("/",function(req,res){
    res.send("Express Works")
});

app.listen(3002, function() {
    console.log(`express started on: http://localhost:3002`)
})