//API stands for application programming interface. It is software intermediate that allows two applications to talk to each other.
//API is a service which allows us to reqest the data.

const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    const data = fs.readFileSync(`./API.json`, "utf-8")
    if (req.url == "/") {
        res.write("<h1>Welcome to the home page</h1>")
        res.end()
    } else if (req.url == "/about") {
        res.write("<h1>Welcome to the about page</h1>")
        res.end()
    } else if (req.url == "/userapi") {
        // res.write("<h1>Welcome to the userApi page</h1>")
        res.writeHead(200, { "Content-type": "application/json" })
        res.end(data)

    } else {
        res.writeHead(404, { "Content-type": "text/html" })
        res.write("<h1>404 Error. Page does not exist.</h1>")
        res.end()
    }
})
server.listen("8000", "127.0.0.1", () => {
    console.log("Listening to port 8000");
})