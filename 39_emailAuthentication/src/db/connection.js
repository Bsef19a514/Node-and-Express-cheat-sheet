const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const db = process.env.DB
console.log(db);
mongoose.connect(db).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(`connection Error: ${error}`);
})