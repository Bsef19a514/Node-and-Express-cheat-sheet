//stream.pipe() method is used to take a readable stream and connect it to a writeable stream.
const http = require("http")
const fs = require("fs")

const server = http.createServer()

server.on("request", (req, res) => {
    //3rd method
    const readStream = fs.createReadStream("stream.txt")
    readStream.pipe(res) //give the destination in the argument
})

server.listen("8000", "127.0.0.1", () => {
    console.log("listening to port 8000");
})