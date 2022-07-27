//Template engines enable you to use static template files in your application.
// At runtime, the template engine replaces in a template file with actual values and transforms
// the template file into html file.
//Some popular template engines for express.js are pug,mustache and ejs. We will be using handlebars--> a mustache template engine

const express = require("express")
const path = require("path")
const app = express()

//to set the view engine for template engine
app.set("view engine", "hbs") //"hbs" for handlebars, "pug" for pug and "ejs" for embadded js

const data = {
    name: "zain sattar"
}
app.get("/", (req, res) => {
    res.render("index", data) //res.render(filename,Dynamicdata-->object)
})

//to host static files like html
// const staticPath = path.join(__dirname, "../views")
// app.use(express.static(staticPath))

app.listen("8000", () => {
    console.log("listening to port 8000");
})