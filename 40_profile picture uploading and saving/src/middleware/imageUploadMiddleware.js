const multer = require("multer");
const path = require("path")

const p1 = path.join(__dirname, "..") //p1 is pointing to the src dir
const destinationPath = path.join(p1, "../public/uploads/");

var storage = multer.diskStorage({ //the is stored in a temporarily storage called disk storage before storing into the destination
    destination: destinationPath,
    filename: (req, file, cb) => {
        cb(null, path.basename(file.originalname, path.extname(file.originalname)) + "_" + Date.now() + path.extname(file.originalname))
    }
})

var uploadImage = multer({
        storage: storage
    }).single("image") //image is the field name in html form

module.exports = uploadImage