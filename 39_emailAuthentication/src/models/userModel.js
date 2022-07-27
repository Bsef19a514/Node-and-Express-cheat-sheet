const mongoose = require("mongoose")
const bcryptjs = require("bcryptjs")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    verify: {
        type: Boolean,
        default: false
    }
})

userSchema.pre("save", async function(next) {
    if (this.isModified("password")) {
        const hashPassword = await bcryptjs.hash(this.password, 12)
        this.password = hashPassword
        next()
    }
})
const userModel = new mongoose.model("User", userSchema)

module.exports = userModel