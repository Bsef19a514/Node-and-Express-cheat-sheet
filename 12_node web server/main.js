//to access the web pages of any web application we need a web server.
//The web server will handle all the http requests (user requests) for the web application.

const http = require("http")

const server = http.createServer((req, res) => {
    res.end("Response from server end")

})

//The request object can be used to get information about current http request like url, request header and data.
//The response object can be used to send a response for a current

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port number 8000");
})