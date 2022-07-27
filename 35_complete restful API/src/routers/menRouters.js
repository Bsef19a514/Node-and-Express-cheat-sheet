const express = require("express")
const mensModel = require("../models/mens")

const router = new express.Router()

router.post("/mens", async(req, res) => {
    try {
        const person = new mensModel(req.body)
        console.log(person);
        const result = await person.save()
        res.status(201).send(result)
    } catch (err) {
        console.log(err)
        res.status(404).send(err)
    }
})

router.get("/mens", async(req, res) => {
    try {
        const result = await mensModel.find({}).sort({ "ranking": 1 }) //returs the result in assending order of rankings
        res.status(200).send(result)
    } catch (err) {
        console.log(err)
        res.status(404).send(err)
    }
})

router.get("/mens/:id", async(req, res) => {
    try {
        const id = req.params.id
        const result = await mensModel.findById(id)
        res.status(200).send(result)
    } catch (err) {
        console.log(err)
        res.status(404).send(err)
    }
})

router.delete("/mens/:id", async(req, res) => {
    try {
        const id = req.params.id
        const result = await mensModel.findByIdAndDelete(id)
        res.status(200).send(result)
    } catch (err) {
        console.log(err)
        res.status(404).send(err)
    }
})

router.patch("/mens/:id", async(req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        const result = await mensModel.findByIdAndUpdate(id, data, { new: true })
        res.status(200).send(result)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

module.exports = router