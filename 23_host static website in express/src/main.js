//To serve static files like images,css, js and html files use express.static() builtin middleware method.
//Note: The name of your html file must be "index.html" to be hoisted as home page
const express = require("express")
const path = require("path")

const app = express()

const staticPath = path.join(__dirname, "../public") //path of the folder in which static files are located.

//console.log(staticPath); 

//builtin middleware
app.use(express.static(staticPath))

app.get("/", (req, res) => {
    res.send("Hello form Express.js")
})

app.listen("8000", () => {
    console.log("listening to port 8000");
})