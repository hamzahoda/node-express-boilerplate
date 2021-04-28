// jitni bhi functionality hai mongoose ki hai find, save

const User = require("userModel");

// finds all users with a name of joe 
// saara data chaiye tou khali object dedein saare users le ayega as an array User.find({})

// database mei lagate the where name = to this wohi cheez hai ye
User.find({name:"Joe"})
.then((users)=>{
    // return array
    console.log("Users",users);
})
.catch((err)=>console.log("Err", err));

// finds user with a name of joe phela object jo milega
User.findOne({name: "Joe"}) //or you can use {_id:"whateverid"}
.then((user)=>{
    //return one object
    console.log("User", user);
})
.catch((err) => console.log("Err",err));
