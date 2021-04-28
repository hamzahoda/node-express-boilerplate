const User = require("userModel");

const joe = new User({
    name: "Joe"
});

joe.save()
    .then(()=>{

        // model instance remove (13b)
        joe.remove().then().catch(err);


        // class method remove jitne bhi joe name ke user sabko delete kardega
        User.remove({name:"Joe"}); //also return promise


        // class method Find and Remove  phela jo milega usko delete
        User.findOneAndRemove({name:"Joe"}); //also return promise



        // class method FindByIdAndRemove  id hai tou specific iek user delete
        User.findByIdAndRemove(joe._id); // also return promise
    })
    .catch((err) => console.log("Err", err));
