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


app.get("/", (req, res) => {
    res.render("index")
})
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/about/*", (req, res) => {
    res.status(404).render("error page", {
        error: " This page in about does not exists"
    })
})

app.get("*", (req, res) => {
    res.status(404).render("error page", {
        error: " This page does not exists"
    })
})
app.listen("8000", () => {
    console.log("listening to port 8000");
})