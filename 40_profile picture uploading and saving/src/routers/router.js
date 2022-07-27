const express = require("express")
const controller = require("../controllers/controller")
const uploadImage = require("../middleware/imageUploadMiddleware")
const router = new express.Router()

router.post("/signup", uploadImage, controller.signupUser)
router.get("/login", controller.showLoginPage)
router.get("/home", controller.showHomePage)
router.post("/login", controller.loginUser)


module.exports = router