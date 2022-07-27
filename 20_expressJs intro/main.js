//Express.js is a Node.js framework. it is the most popular framework. It is web application framework that provides you a simple API to build websides, web apps and backends.
//API methods
//get --to read data from the server
//post --to create a new data
//put --to update data
//delete --to delete data
const express = require("express")
const app = express() //to create an express application, we need to use the express() function

//app.get(route,callback )
//the callback function has two arguments req and res. 
//req object is used to handle http requests (requests by the client) it has the properties like query string, parameters, body and http headers etc.
//res object is used to get 
app.get("/", (req, res) => {
    res.send("Hello from express server")
})
app.get("/about", (req, res) => {
    res.send("Hello from about us page")
})
app.listen("8000", () => {
    console.log("listening to port 8000");
})