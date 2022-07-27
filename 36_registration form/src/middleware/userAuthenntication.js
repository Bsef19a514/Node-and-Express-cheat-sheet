const jwt = require("jsonwebtoken")
const registerationModel = require("../models/registrationModel")

const authentication = async(req, res, next) => {
    try {
        const UserId = jwt.verify(req.cookies.jwt, process.env.SECRET_KEY) //verifying the jwt token obtained from cookies and getting user id
        const userInfo = await registerationModel.findOne({ _id: UserId }) //getting user details based on id
        req.userInfo = userInfo //attaching userdetails with req Object so that we can use those details in home page
        next() //passing control to the actual route("home")

    } catch (err) {
        const msg = "You are not logged in. Please login first."
        res.redirect(`/login?msg=${msg}`)
            // res.status(404).send("ERROR: Page not found")
    }
}

module.exports = authentication