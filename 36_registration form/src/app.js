require("dotenv").config() //must be the very first line of your project/file
const express = require("express")
require("./db/connection")
const path = require("path")
const registrationRouter = require("./routers/registerationRouters")
const loginRouter = require("./routers/loginRouters")
const cookieParser = require("cookie-parser")

const app = express()
const port = process.env.PORT || 3000

const staticPath = path.join(__dirname, "../public")
const viewPath = path.join(__dirname, "../templates/views")


app.use(express.static(staticPath))
app.use(cookieParser())
    //app.use(express.json())
app.use(express.urlencoded({ extended: false })) //to read the data coming from  html form
app.set("views", viewPath)
app.set("view engine", "hbs")
app.use(registrationRouter)
app.use(loginRouter)

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})