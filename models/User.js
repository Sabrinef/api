const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please provide a username"]
    },
    lastname: {
        type: String,
        required: [true, "Please provide a username"]
    },
    email:{
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email"
        ]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        //minlength: 6,
        select: false,
    },
});

const User = mongoose.model("user",UserSchema);

module.exports = User;