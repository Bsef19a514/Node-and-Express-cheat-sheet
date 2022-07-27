const express = require("express")
const path = require("path")
const app = express()

//to register the static directory (which contains all static file like html, css, images)
const staticPath = path.join(__dirname, "../public")
app.use(express.static(staticPath))

//to set the view engine for template engine
app.set("view engine", "hbs") //"hbs" for handlebars, "pug" for pug and "ejs" for embadded js

//to set the views directory 
const templatePath = path.join(__dirname, "../templates")
app.set("views", templatePath)
const data = {
    name: "zain sattar"
}
app.get("/", (req, res) => {
    res.render("index", data) //res.render(filename,Dynamicdata-->object)
})
app.get("/about", (req, res) => {
    res.render("about") //res.render(filename,Dynamicdata-->object)
})

app.listen("8000", () => {
    console.log("listening to port 8000");
})