const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        // agar name na mila tou error show apni marzi ka 
        required: [true, 'Name should be required']
    }
})

const User = mongoose.model("user",UserSchema);

const user = new User({
    name: undefined
});
