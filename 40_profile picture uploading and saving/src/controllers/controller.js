const userModel = require("../models/userModel")
const imageModel = require("../models/imageModel")


const signupUser = async(req, res) => {
    try {
        const password = req.body.password
        const cPassword = req.body.cpassword
        if (password === cPassword) {
            const user = new userModel({
                name: req.body.name,
                email: req.body.email,
                password,
                age: req.body.age,
                phone: req.body.phone,
            })
            const result1 = await user.save()

            // console.log(req.file)
            const image = new imageModel({
                imageName: req.file.filename,
                imageId: result1._id
            })
            const result2 = await image.save()
            res.status(201).send("signup successful")
        } else {
            res.send("Passwords does not match.")
        }
    } catch (err) {
        console.log(err)
        res.status(501).send(`Error Occured: ${err}`)
    }
}

const showLoginPage = (req, res) => {
    res.render("login")

}
const showHomePage = (req, res) => {
    res.render("home")

}

const loginUser = async(req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password
        const result1 = await userModel.findOne({ email })
        if (result1) {
            if (password === result1.password) {
                const result2 = await imageModel.findOne({ imageId: result1._id })
                res.render("home", { "userInfo": result1, "imageInfo": result2 })
            } else {
                res.send("password is incorrect")
            }
        } else {
            res.send(`Invalid email`)
        }
    } catch (err) {
        console.log(err)
        res.status(501).send(`Error Occured: ${err}`)
    }
}

module.exports.signupUser = signupUser
module.exports.showLoginPage = showLoginPage
module.exports.showHomePage = showHomePage
module.exports.loginUser = loginUser