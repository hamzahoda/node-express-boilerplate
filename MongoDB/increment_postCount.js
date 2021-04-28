const User = require("./userModel");

const joe = new User({
    name: "Joe"
})

joe.save()
.then(() => {

    // joe.set("postCount",1);
    // joe.save();

    // User.update({name:"Joe"}, {postCount:1});

    // user can have their post count increamented by 1 
    // inc means increament dec bhi maujood hai queries isme jo hai firebase mei nahi usme limitation hai
    // fully control search modify 
    
    User.update({name:"Joe"}, {$inc:{postCount:1}}); //returns promise

})