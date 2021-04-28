const User = require("./userModel");

function addUser() {

    console.log("adding user");

    // initialize karaya schemea ko aur name save kia
    // name ke sath user ka instance bana usko save kia save karne se promise mila then aur catch
    const joe = new User({name:"Doe"});
    joe.save()
    .then(() => console.log("saved user"))
    .catch((err) => console.log("Err", err));

}
module.exports = addUser;