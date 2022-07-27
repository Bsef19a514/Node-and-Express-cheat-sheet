const express = require("express")
const path = require("path")
const hbs = require("hbs")
const app = express()

const staticPath = path.join(__dirname, "../public")
const templatePath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")
app.use(express.static(staticPath))

app.set("view engine", "hbs")
app.set("views", templatePath)
hbs.registerPartials(partialsPath)

const obj = {
    myName: "zain sattar"
}
app.get("/", (req, res) => {
    res.render("index", obj)
})
app.get("/about", (req, res) => {
    res.render("aboutUs", obj)
})

app.listen("8000", () => {
    console.log("listening to port 8000");
})