const userModel = require("../models/userModel")
const tokenModel = require("../models/tokenModel")
const crypto = require("crypto")
const sendEmail = require("../utils/sendEmail")

const signUpUser = async(req, res) => {
    try {
        const { name, email, password } = req.body
        const user = new userModel({
            name,
            email,
            password
        })
        const result1 = await user.save()
        const token = new tokenModel({
            userId: result1._id,
            token: crypto.randomBytes(32).toString("hex")
        })
        const result2 = token.save()
        const url = `${process.env.BASE_URL}users/${user._id}/verify/${token.token}`
        await sendEmail(email, "Verify Email", url)
        console.log(result2)
        res.send("An email is sent to your account please verify.")
    } catch (error) {
        console.log(`Error occured: ${error}`)
        res.status(404).send(`Error occured: ${error}`)
    }
}
module.exports = signUpUser