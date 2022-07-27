const mongoose = require("mongoose")
const validator = require("validator")

mongoose.connect("mongodb://localhost:27017/zainsattar").then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
})

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required."], //with custom error message
    },
    videos: {
        type: Number,
        // validate(value) { //custom validation method 1
        //     if (value < 5) {
        //         throw new Error("no of videos can not be negative.")
        //     }
        // }

        validate: { //custom validation method 2
            validator: (value) => {
                return value > 0
            },
            message: "no of videos can not be negative."
        }
    },
    author: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isAlpha(value)) {
                throw new Error("Author name can only contain alphabets")
            }
        }
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                return validator.isEmail(value)
            },
            message: "Invalid email address"
        }
    },
    active: Boolean,
    type: String,
    Date: {
        type: Date,
        Default: Date.now
    }
})

const Model = new mongoose.model("collection1", schema)

const insertDocument = async(Document) => {
    try {
        const result = await Model.insertMany(Document)
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
const doc = new Model({
    name: "php",
    type: "backend",
    author: "zain",
    email: "zainsattar17@gmail.com",
    active: true,
    videos: 76
})
insertDocument([doc])