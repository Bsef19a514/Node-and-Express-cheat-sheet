//REST stands for "Represented state transfer"
//REST  is an architectural style for an API that used HTTP requests to access and use data.

const express = require("express")
require("./db/connection")
const router = require("./routers/students")


const app = express()
const port = process.env.PORT || 3000

app.use(express.json()) //express.json()--> this method is used to recognize incoming request as a json object. This method is only used by PUT and POST requests. It is called a middleware in the application.
app.use(router) //3: we need to register our router




app.listen(port, () => {
    console.log(`listening to port ${port}`);
})