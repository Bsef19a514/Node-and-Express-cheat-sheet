const mongoose = require("mongoose")
const validator = require("validator")

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: [true, "Please enter email adress."],
        unique: [true, "This email is already present."],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email adress")
            }
        }
    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10,
        unique: [true, "This phone number is already registered."],
        validate(value) {
            if (!validator.isNumeric(value)) {
                throw new Error("Invalid Phone Number")
            }
        }
    },
    address: {
        type: String,
        required: true,
    }
})

const Model = new mongoose.model("StudentRecord", schema)

module.exports = Model