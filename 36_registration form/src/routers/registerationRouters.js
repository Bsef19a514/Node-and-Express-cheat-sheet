const registerationModel = require("../models/registrationModel")
const express = require("express")
const validator = require("validator")

const router = new express.Router()

router.get("/register", (req, res) => {
    res.render("registration")
})

router.post("/register", async(req, res) => {
    try {
        const password = req.body.password
        const cPassword = req.body.cPassword
        if (password === cPassword) {
            const registerationData = new registerationModel({
                firstname: req.body.fname,
                lastname: req.body.lname,
                email: req.body.email,
                password,
                age: req.body.age,
                gender: req.body.gender,
                phone: req.body.phone
            })
            const result = await registerationData.save()
            console.log(result)
            res.status(201).send("signup successful")
        } else {
            res.send("Passwords does not match.")
        }
    } catch (err) {
        console.log(err)
        res.status(501).send(`Error Occured: ${err}`)
    }
})

module.exports = router