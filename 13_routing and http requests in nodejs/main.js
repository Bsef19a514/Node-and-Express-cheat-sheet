const http = require("http")


const server = http.createServer((req, res) => {
    // console.log(req.url); //given the url of request
    if (req.url == "/") {
        res.end("Home Page. Hello from server end.") //method 1
    } else if (req.url == "/about") {
        res.write("About Page. Hello from server end.") //method 2
        res.end()
    } else {
        res.writeHead(404, { "Content-type": "text/html" })
        res.end("<h1>404 Error . Page does not exist.</h1>")
    }

})

server.listen(8000, "127.0.0.1", () => {
    console.log("Server started. Listening on port 8000.");
})