const express = require("express")
const jwt = require("jsonwebtoken")

// const app = express()
// const port = process.env.PORT || 3000

// app.listen(port, () => {
//     console.log("listening to port " + port)
// })

const createToken = (obj, secretKey) => {
    const token = jwt.sign(obj, secretKey, { expiresIn: "2 seconds" })
    console.log(token);
    return token
}

const verifyToken = (token, secretKey) => {
    const data = jwt.verify(token, "mysecretKeyiszainahmad@BSEF19a514pattokipucit")
    console.log(data);
    return data
}


const secretKey = "mysecretKeyiszainahmad@BSEF19a514pattokipucit"
const data = {
    _id: "1234567890"
}

const token = createToken(data, secretKey)
const result = verifyToken(token, secretKey)