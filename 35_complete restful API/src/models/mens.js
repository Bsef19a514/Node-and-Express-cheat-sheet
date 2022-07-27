const mongoose = require("mongoose")
const validator = require("validator")

const menSchema = new mongoose.Schema({
    ranking: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    dob: {
        type: Date,
        required: true,
        trim: true
    },
    country: {
        type: String,
        trim: true,
        required: true
    },
    event: {
        type: String,
        default: "100m"
    }

})

const mensModel = new mongoose.model("menRanking", menSchema)

module.exports = mensModel