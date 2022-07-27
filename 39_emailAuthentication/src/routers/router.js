const express = require("express")
const router = new express.Router()
const signupUser = require("../controllers/loginSignup")
const userModel = require("../models/userModel")
const tokenModel = require("../models/tokenModel")
const bcryptjs = require("bcryptjs")
const crypto = require("crypto")

router.post("/signup", signupUser)

router.post("/login", async(req, res) => {
    try {
        const { email, password } = req.body
        const result = await userModel.findOne({ email })
        if (result) {
            if (result.verify) {
                const isMatched = bcryptjs.compare(password, result.password)
                if (isMatched) {
                    res.send("login successful")
                } else {
                    res.send("incorrect password")
                }
            } else {
                const token1 = await tokenModel.findOne({ userId: result._id })
                if (token1) {
                    res.send("PLease verify your email first")
                } else {
                    const token2 = new tokenModel({
                        userId: result._id,
                        token: crypto.randomBytes(32).toString("hex")
                    })
                    const result2 = await token2.save()
                    const url = `${process.env.BASE_URL}users/${result._id}/verify/${result2.token}`
                    await sendEmail(email, "Verify Email", url)
                }

            }
        } else {
            res.send("email not found.")
        }
    } catch (error) {
        console.log(error);
    }
})

router.get("/users/:id/verify/:token", async(req, res) => {
    try {
        console.log(`"user id is: ${req.params.id}`);
        const user = await userModel.findOne({ _id: req.params.id })
        console.log(`user is: ${user}`);
        if (!user) {
            res.status(404).send("invalid url")
        } else {
            const token = await tokenModel.findOne({
                userId: req.params.id,
                token: req.params.token
            })
            if (!token) {
                res.status(404).send("invalid url")
            } else {
                const result1 = await userModel.updateOne({ _id: req.params.id }, { verify: true })
                const result2 = await tokenModel.deleteOne({ _id: req.params.id })
                res.send("Email verified successfully")
            }
        }
    } catch (error) {
        res.send(error)
        console.log(error);
    }
})

module.exports = router