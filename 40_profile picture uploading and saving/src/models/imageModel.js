var mongoose = require("mongoose")

const imageSchema = new mongoose.Schema({
    imageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    imageName: {
        type: String
    }
})

const imageModel = new mongoose.model("ProfilePic", imageSchema)


module.exports = imageModel