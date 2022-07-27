const mongoose = require("mongoose")

const dbURL = "mongodb+srv://zainsattar17:12345@cluster0.bdfuvro.mongodb.net/PersonDB?retryWrites=true&w=majority"

//DBuser=zainsattar17
//DBuser password=12345
//DBname=PersonDB
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
mongoose.connect(dbURL).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: Number
    }
})

const userModel = new mongoose.model("Person", userSchema)

const person = new userModel({
        name: "zain sattar",
        age: 20,
        email: "zainsattar@gmail.com"
    })
    // person.save().then((data) => {
    //     console.log(data);
    // }).catch((error) => {
    //     console.log(error);
    // })

// userModel.findOne({ email: "zainsattar@gmail.com" }).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })

// userModel.updateOne({ email: "zainsattar@gmail.com" }, { age: 18 }).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })

userModel.deleteOne({ email: "zainsattar@gmail.com" }).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})