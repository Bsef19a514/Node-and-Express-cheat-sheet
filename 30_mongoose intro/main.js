//Mongoose is a object data modeling library for mongodb and nodejs.
//It manages relationships b/w data, provides schema validation
// and is used to translate between objects in code and the representation of those objects in Mongodb (BSON format)
//It helps us to establish the connection between mongodb and nodejs.

const mongoose = require("mongoose")

//connetion and creation of db
//mongoose.connect(uri)---->uri means path of our database  Note: zainsattar is the name of db
mongoose.connect("mongodb://localhost:27017/zainsattar").then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(`connection failed. ${err}`)
})

//Schema
//A mongoose schema defines the structure of the document , default values and validation etc.
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: String,
    videos: Number,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})


//collection creation
//A mongoose model is a wrapperr on mongoose schema. It provides an interface to the database for creating, quering, updating, deleting records etc.
const Course = new mongoose.model("collection1", schema);

//insert a single document into db
async function insertSingleDocument() {
    try {
        const nodejs = new Course({
            name: "nodejs",
            type: "backend",
            videos: 20,
            active: false,
        })

        const result = await nodejs.save()
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

//insertSingleDocument()

//insert many documents into db
async function insertManyDocuments() {
    try {
        const react = new Course({
            name: "react",
            type: "frontend",
            videos: 50,
            active: true,
        })

        const mongo = new Course({
            name: "mongo",
            type: "db",
            videos: 6,
            active: false,
        })

        const java = new Course({
            name: "java",
            type: "backend",
            videos: 12,
            active: true,
        })


        const result = await Course.insertMany([react, java, mongo])
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
//insertManyDocuments()  //function call

//reading documents from db
async function getDocumet(obj) {
    try {
        const result = await Course.find(obj)
            //.select({ "name": 1, videos: 1 }) //to set only specific fields of a document
        console.log(result);
    } catch (err) {
        console.log(err);
    }

}
//getDocumet({ type: "backend" })

//--------------------comparison query oopearators----------------------------------------------------------------------------------------------------------------------------------------
//$eq (equal to), $gt (greater than), $gte (>=), $lt (less than), $lte (<=), $ne (not equal to), $in (is given value in the array?), $nin (givn value is not in the array)

//getDocumet({ videos: { $gte: 12 } }) //get those docs whose videos are >12
//getDocumet({ type: { $in: ["backend", "db"] } }) //find and returns those document whose value match with any of the element present in array

//--------------------logical query operators----------------------------------------------------------------------------------------------------------------------------------------------------------------
//$and,$not,$or,$nor
//getDocumet({ $or: [{ name: "nodejs" }, { active: false }] }) //returns those documents that match any of the conditions given in the array. Note: The conditions can be more than two.
//getDocumet({ $and: [{ name: "nodejs" }, { active: false }] }) //returns those documents that match all the conditions given in the array. Note: The conditions can be more than two.

//--------------------------count and sorting queries---------------------------------------------------------------------------------------------
async function getCountOfDocumet(obj) {
    try {
        const result = await Course.find(obj)
            .sort({ "videos": 1 }) //1 means order in accending order -1 means decending order.
            //.countDocuments() //Return the count of document that satisfies the given condition in find()
            //.select({ "name": 1, videos: 1 }) //to set only specific fields of a document
        console.log(result);
    } catch (err) {
        console.log(err);
    }

}
//getCountOfDocumet({})

//-------------------Update document-------------------------------------------------------------------------------------------------------------------------
//1) updateOne(filter,update,options)
//2) findByIdAndUpdate(_id,update,options)
//3) updateMany(filter,uodate,options)
async function updateDocument(_id) {
    try {
        //const result = await Course.updateOne({ _id }, { $set: { "name": "node" } })  //Updates the first document found based on the query and returns the success or error message.
        //const result = await Course.findByIdAndUpdate({ _id }, { $set: { "name": "node" } }) //udates the one document based on _id and returns the old unchanged data.
        //const result = await Course.findByIdAndUpdate({ _id }, { $set: { "name": "nodeJs" } }, { new: true }) //udates the one document based on _id and returns the new updated data data.
        const result = await Course.updateMany({ name: "nodejs" }, { $set: { "name": "node" } }) //Updates all the documents found based on the query and returns the success or error message.
        console.log(result);
    } catch (err) {
        console.log(err);
    }

}

//updateDocument("62b86fb9e4d5ad373ebece52")

//------------------------------------delete Documents-------------------------------------------------------------------------------------------------
//1) deleteOne(filter) //delete the first document that satisfies the filter and returns the delete count.
//2) deleteManys(filter) //delete all the documents that satisfies the filter and returns the delete count.
//3) findByIdAndDelete(_id) //delete the document that satisfies the _id and returns the deleted document.
async function deleteDocument(filter) {
    try {
        //const result = await Course.deleteOne(filter)
        const result = await Course.findByIdAndDelete(filter)
        console.log(result);
    } catch (err) {
        console.log(err);
    }

}
//deleteDocument("62b99e71277f95c892c5b275")