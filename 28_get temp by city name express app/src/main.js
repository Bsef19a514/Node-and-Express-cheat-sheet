const express = require("express")
const hbs = require("hbs")
const requests = require("requests")
const path = require("path")

const app = express()

const viewPath = path.join(__dirname, "../templates/views")
const partialPath = path.join(__dirname, "../templates/partials")
const staticPath = path.join(__dirname, "../public")
app.set("view engine", "hbs")
app.set("views", viewPath)
hbs.registerPartials(partialPath)



app.use(express.static(staticPath))

app.get("/temp", (req, res) => {
    const city = req.query.name
    const apiKey = `1fe5f98f629555d1d41da29cc9705334`
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
    requests(api)
        .on("data", (chunkData) => {
            const objData = JSON.parse(chunkData)
            const actualData = [objData]
            console.log(actualData[0].main.temp);
            const data = {
                temp: Math.round((actualData[0].main.temp - 32) * (5 / 9)),
                city: actualData[0].name,
                country: actualData[0].sys.country
            }
            res.render("temp", data)
        })
        .on("end", () => {

        })
        .on("error", () => {
            console.log("Please enter a valid city name");
        })

})

app.listen("8000", () => {
    console.log("listening to port 8000");
})