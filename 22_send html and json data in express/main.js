const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("<h1>This heading 1 of home page</h1>")
        // res.send("<h1>This heading 2 of home page</h1>")  //can not use multiple res.send() because send method send the response. Once the response is sent, you can not resend an other response.
})
app.get("/about", (req, res) => {
    res.write("<h1>This heading 1 of about page</h1>")
    res.write("<h1>This heading 2 of about page</h1>")
    res.send()
})
app.get("/contact", (req, res) => {
    res.send("<h1>This heading 1 of contact page</h1>")
})
app.get("/api", (req, res) => {
    res.send(arrayOfObj)
})

//method 2 to send json data
//both res.send() and res.json() are identical but res.json( ) also converts non-objects like null and undefined into jsin which are not valid JSON.
app.get("/api2", (req, res) => {
    //res.send(arrayOfObj)
    res.json(arrayOfObj)
})

const arrayOfObj = [{
        id: 123,
        name: "zain",
        age: 20
    },
    {
        id: 123,
        name: "zain",
        age: 20
    },
    {
        id: 123,
        name: "zain",
        age: 20
    }
]
app.listen("8000", () => {
    console.log("listening to port 8000");
})