const User = require("./userModel")



joe.update({name:"Alex"}); //return promise

// class can update 
User.update({name:"Joe"},{name:"Alex"}); // retruns apromise

// class can update one record 
User.findOneAndUpdate({name:"Joe"},{name:"Alex"}); //returns a promise

// class can find a record with an Id and update 
User.findByIdAndUpdate(joe._id,{name:"Alex"}); // returns a promise


})
.catch((err)=>console.log("Err",err));