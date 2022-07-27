const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Welcome to home page")
})
app.get("/about", (req, res) => {
    res.status(200).send("Welcome to about page")
})
app.get("/contact", (req, res) => {
    res.status(201)
    res.send("Welcome to contact us page")
})

app.listen("8000", () => {
    console.log("Listening to port 8000");
})