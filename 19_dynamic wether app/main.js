const fs = require("fs")
const http = require("http")
const requests = require("requests")
const apiKey = `1fe5f98f629555d1d41da29cc9705334`
const api = `https://api.openweathermap.org/data/2.5/weather?q=pattoki&appid=${apiKey}`

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests(api)
            .on("data", (chunkData) => {
                const objData = JSON.parse(chunkData)
                console.log(objData);
                const data = [objData]
                    //console.log(data);
                console.log(data[0].main.temp)
            })
            .on("end", () => {
                console.log("End of api call");
            })
            .on("error", (error) => {
                console.log(error);
            })
    }
})
server.listen("8000", "127.0.0.1", () => {
    console.log("Listening to port 8000");
})