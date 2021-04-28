// mongoose connect ke lie hai chaiye local ya cloud database hou kaamdono me wese karega chaiye local cloud ya remote

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
//  aur customize karna hou ke length 2 se bari hou documentation se pori detail miljayegi

    name: {
        type: String,
        validate: {
            validator:(name)=> name.length>2,
            message: "Name must be longer than 2 character"
        },
        required:[true, "Name should be required"]
    }
})

const User = mongoose.model("user",UserSchema);
