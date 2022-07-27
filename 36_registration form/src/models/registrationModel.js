const mongoose = require("mongoose")
const validator = require("validator")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const registerationSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        validate: { //custom validation method 2
            validator: (value) => {
                return validator.isAlpha(value)
            },
            message: "Only alphabets are allowed in firstname"
        }

    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: (value) => {
                return validator.isAlpha(value)
            },
            message: "Only alphabets are allowed in Lastname"
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Not a valid email.")
            }
        }

    },
    gender: {
        type: String,
        required: true
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
    },
    token: {
        type: String,
        required: true
    }
})

//to hash the password
registerationSchema.pre("save", async function(next) { //pre method take two arguments 1) event like save, update, delete   2)function do perform some task
    if (this.isModified("password")) {
        this.password = await bcryptjs.hash(this.password, 10)
        next() //to pass the control to next operation like "save"
    }
})

registerationSchema.methods.generateAuthenticationToken = async function() {
    try {
        const tokken = await jwt.sign({ _id: this._id }, "iamzainahmadfromlahoreiamdoingSEfromPUCIT,Lahore") //1) is my unique identifier 2) is my secret key
        this.token = tokken
        await this.save()
        return tokken
    } catch (error) {
        console.log(`ERROR occured: ${error}`);
    }
}

const registrationModel = new mongoose.model("userRegistration", registerationSchema)

module.exports = registrationModel