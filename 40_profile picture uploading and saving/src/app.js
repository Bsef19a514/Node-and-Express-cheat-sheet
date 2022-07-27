const express = require("express")
const path = require("path")
const dotenv = require("dotenv").config()
const hbs = require("hbs")
require("./db/connection")

const router = require("./routers/router")

const app = express()
const port = process.env.PORT || 8000

const publicPath = path.join(__dirname, "../public/")
const viewPath = path.join(__dirname, "../templates/views")

app.use(express.static(publicPath))
app.use(express.urlencoded({ extended: false }))
app.set("view engine", "hbs")
app.set("views", viewPath)
app.use(router)

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})