const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
        min: 16
    },
    password: {
        type: String,
        required: true,
    }
    // },
    // image: {
    //     type: String,
    //     required: true
    // }
})

const userModel = new mongoose.model("User", UserSchema)

module.exports = userModel