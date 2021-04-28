//Rest Api json web token bohat use apni api kosecure ke liye
// restapi ka matlab sirf endpoints maujood honge jo sirf data deinge json ke andar uska na session mantain hoga na kuch sirf aur sirf apke token ke sath chalta hai
//client side se token jayega server pe agar token verify hoga tou server request handle karega warna nahi usko error show kardega



// jab rest api banate hai usme session nahi hote session kab hota hai jab server se client ko data bhej rahe hote hain 
//pages ya html render rest api mei session maintain nahi hota uswaqt sirf api hoti hain aur unko acces ke liye koi token  
//hota hai woh token json web token jwt se banate hain
//

const express = require("express");
const bodyParser = require("body-parser");

// library use real life mei yehi use mostly thora security level pe kaam karte hain but still ye use 
const jwt = require("jsonwebtoken");

const app = express();

// token baneinge tou usko is secret key ki madad se encrypt 
// ye key apke server par hoga agar koi token ko hack bhi karlega phir bhi usko secret key chiye hogi decrypt ke liye 
const secretKey = "whateveryouwant*&*&*&"

app.use(bodyParser.json());
app.use(bodyParser
    .urlencoded({
        extended:true
    }));

    //static folder
    app.use('/public', express.static(__dirname +'/public'));

    // slash pe login page render 
    app.get('/', function(req, res){
        res.sendFile("login.html",{
            root:__dirname
        });
    });

    app.get("/login", function(req, res){
        res.sendFile("login.html", {
            root:__dirname
        });
    });

    app.post("/login",function(req,res){
        var token=null;
        if (req.body.username == "admin" && req.body.password == 'admin'){
            
            // token banana hai jwt.sign ke andar jo object deinge id,profile image wagera woh token banega
            
            // token 15 minutes mei expire usually log 24 hours dalte hain
            token = jwt.sign({username: req.body.username}, secretKey,{expiresIn:"15m"});
            // console.log("token",token);

            //token verify ka tareeka object return kardega agar object sahi milgaya tou token verify aur tempered hoga tou verify nahi

            // console.log("verifying...",jwt.verify(token,secretKey))

        }
        res.redirect("/redirects?token="+token);
    })


app.get("/redirects", function(req,res){
    console.log("req.query.token",req.query.token)
    
    //requuest ki query mei token maujood tou admin le kar jayega
    if(!req.query.token){
        
        // api call karte tou client ke pass ye local storage mei save kardete 
        // aur jab bhi api call kareinge ye wala token api ke header mei set karke bhejeinge server pe 
        //aur server hamesha middleware mei is token ko dekhega aur verify karega agar verify hoga tou api access karne dega warna nahi 
        
        // yahan condition laga sakta hoon if ki agar verify hou tou redirect admin warna kahin aur 
        console.log("verifying...",jwt.verify(token,secretKey))
        
        res.redirect("/admin");
    }
    // token nahi mila tou sahi user nahi
    else {
        res.send("Who are you??")
    }
})

app.get("/admin",function(req,res){
    res.send("Wow you are Admin.....!! <a href='/logout'>Logout</a>");
})

app.get('/logout',function(req,res){
    res.redirect('/login');
});

// tamama routes handle jo opar nahi hai
// for all sab se last mei lagate hain
//opar jitni request handle honi thi hogayi aur jo nahi howi woh astersik mei ajayegi

// apni pasandka error message show
app.get("*",function(req,res){
    res.end("What Exactly you want?");
})

app.listen(3000,function(){
    console.log(`Express started on: http://localhost:${3000}`);
})