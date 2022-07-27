const express = require("express")
const Model = require("../models/students")
    //1: Create a new express router
const router = new express.Router()

//2:define the router

//create a new student (save it to db) using promises
router.post("/students", (req, res) => {
    console.log(req.body)
    const student = new Model(req.body)
    student.save().then((result) => {
        console.log(result)
        res.status(201)
        res.send("student details saved to db successfully.")
    }).catch((error) => {
        console.log(error)
        res.status(400).send(error)
    })
})

//create a new student (save it to db) using async await
router.post("/about/students", async(req, res) => {
    console.log(req.body)
    const student = new Model(req.body)
    try {
        const result = await student.save()
        console.log(result);
        res.status(201).send(result)
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
})

//read all the data from server and get it into the client side
router.get("/students", async(req, res) => {
    try {
        const result = await Model.find()
        res.status(201).send(result)
    } catch (err) {
        console.log(err);
        res.status(400).send(err)
    }
})

//read an individual student data from server and get it to the client side. 
router.get("/students/:id", async(req, res) => {
    try {
        const _id = req.params.id
            // const result = await Model.find({ _id })
            //const result = await Model.findOne({ _id })
        const result = await Model.findById(_id)
        res.status(201).send(result)
    } catch (err) {
        console.log(err);
        res.status(400).send(err)
    }
})

//delete student data from server/database
router.delete("/students/:id", async(req, res) => {
    try {
        const _id = req.params.id
        const result = await Model.findByIdAndDelete(_id)
            //const result = await Model.deleteOne({ _id })
            //const result = await Model.deleteMany({ _id })
        console.log(result)
        res.status(200).send(result)

    } catch (err) {
        console.log(err)
        res.status(400).send(err)

    }
})

//update student record in server/db using _id using put and patch requests
router.patch("/students/:id", async(req, res) => {
    try {
        const _id = req.params.id
        const data = req.body
        const result = await Model.findByIdAndUpdate(_id, data, { new: true }) //returns the newly updated data
            //const result = await Model.updateOne({ _id }, data)
            //const result = await Model.updateMany({ _id }, data)
        console.log(result)
        res.status(201).send(result)
    } catch (err) {
        console.log(err)
        res.status(404).send(err)
    }
})




module.exports = router