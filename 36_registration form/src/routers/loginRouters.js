const express = require("express")
const bcryptjs = require("bcryptjs")
const registerationModel = require("../models/registrationModel")
const authenticate = require("../middleware/userAuthenntication")


const loginRouter = new express.Router()

loginRouter.get("/login", (req, res) => {
    const msg = req.query.msg
    res.render("login", { msg })
})

loginRouter.get("/home", authenticate, (req, res) => {
    //console.log(`user details are: ${req.userInfo}`)
    const userDetails = req.userInfo
    res.render("home", userDetails)
})
loginRouter.get("/logout", authenticate, (req, res) => {
    res.clearCookie("jwt")
    res.redirect("/login")
})

loginRouter.post("/login", async(req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password
        const result = await registerationModel.findOne({ email })
        if (result) {
            const isMatched = await bcryptjs.compare(password, result.password)
            if (isMatched) {
                const token = await result.generateAuthenticationToken()
                    //console.log(`Auth token is: ${token}`)
                res.cookie("jwt", token, {
                    expires: new Date(Date.now() + 300000), //expires the cookie after 5 min
                    httpOnly: true //blockes the client from making any change to the cookie
                })
                res.redirect(301, "/home") //301 is the status code 
            } else {
                res.render("login", { msg: "incorrect password." })
            }
        } else {
            res.render("login", { msg: "there is no account with this email." })
        }
    } catch (err) {
        console.log(err)
        res.status(501).send(`Error Occured: ${err}`)
    }
})




module.exports = loginRouter