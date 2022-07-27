//Streams are objects that let you to read data from a source and write data to a destination in a continuous fashion.
//Streaming means listening to music or watching video in "real time" instead of downloading it to your computer and watching it later.

const fs = require("fs")
const http = require("http")

const server = http.createServer()


server.on("request", (req, res) => {
    //method 1 (reading whole file at once and then displaying it)
    // fs.readFile("stream.txt", "utf-8", (err, data) => {
    //     if (err) {
    //         res.end(err.toString())
    //     } else {
    //         res.end(data.toString())
    //     }
    // })

    //method 2 (streaming)
    const readableStream = fs.createReadStream("stream.txt");
    readableStream.on("data", (chunkData) => {
        res.write(chunkData);

    })
    readableStream.on("end", () => {
        res.end()
    })
    readableStream.on("error", (err) => {
        res.write(err.toString())
        res.end()

    })

})

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to port 8000");
})