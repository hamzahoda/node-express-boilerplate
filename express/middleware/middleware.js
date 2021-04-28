const express = require('express');

const app = express();

// client ki request se server ke 
// response tak beech ka rasta is called middleware


function log(req,res,next) {
    console.log(new Date(), req.method,req.url);
    next();
}

function secondMiddleware(req, res, next) {
    console.log('Second Middleware');
    next();
}

// pheley phela log middle ware chalega phir secondmiddleware chalega get slash
//ki request pe
// middleware mei 3 parameters iek next ka 
// client ki request aye
// app.get('/'
// middle ware ,log, secondMiddleware, 
// response gaya function(req, res){
    // res.send('Express Works');
// })
// abhi khod kiya hai wese libraries ati hain lig save karne ke liye


// multiple middleware laga sakte hain lekin next karke

// request end karte hain response .end ya.json karke
// middleware complete tou next() pass age jane do
// no limit secong middleware par hi response end kardon
// res.send("yahan end")

app.get('/',log, secondMiddleware, function(req, res){
    res.send('Express Works');
})

app.get('/error', function (req, res, next){
    throw new Error('Testing Err');
})

function notDefineRoute(req, res, next){
    res.send('404 not found')
}
app.use(notDefineRoute)

function errorHandler(err,req,res,next){
    if(err){
        res.send("errror:" + err)
    }
}
app.use(errorHandler)