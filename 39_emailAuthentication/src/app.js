const express = require("express")
require("./db/connection")
const router = require("./routers/router")



const port = process.env.PORT || 8000
const app = express()



app.use(express.json())
app.use(router)




app.listen(port, () => {
    console.log(`listening to port ${port}`)
})