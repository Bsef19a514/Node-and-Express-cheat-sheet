const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/zainsattar").then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
})

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, //unique is not a mongoose validation
        lowercase: true, //converts any given format into lowar case format 
        trim: true, //removes the leading and tailing blank spaces like "   mongo db  "
        minlength: 2, //minimun length of name must be 2 characters
        maxlength: [20, "maximun 20 leter are allowed. please correct it."] //with custom error message
    },
    videos: Number, //for Number we have enum,min and max validators
    active: Boolean,
    type: {
        type: String,
        enum: ["frontend", "backend", "db", "fullstack"], //allows the user to enter those values that is in the array else gives an  error
        required: true
    },
    Date: { //for Date we have min and max validators
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
    name: "  C",
    type: "operatingsystems",
    active: true,
    videos: 86
})
insertDocument([doc])