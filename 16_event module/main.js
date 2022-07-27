 //NodeJs has a buit-in module called events where you can create, fire and listen for your own events.

 const events = require("events")

 const EventEmitter = new events.EventEmitter()

 EventEmitter.on("sayMyName", () => { //event registration (event handling)
     console.log("My name is zain ahmad");

 })

 EventEmitter.on("sayMyName", () => { //event registration (event handling)
     console.log("My name is zarar ahmad");

 })

 EventEmitter.on("sayMyName", () => { //event registration (event handling)
     console.log("My name is Abdul Sattar");

 })

 EventEmitter.emit("sayMyName") //event fire

 //Note: Always handle or register event before event firing/emitting.

 //Event with parameters
 EventEmitter.on("checkStatus", (statusCode, msg) => {
     console.log(`Status code is: ${statusCode} and msg is: ${msg}`);
 })
 EventEmitter.emit("checkStatus", 200, "ok")
 EventEmitter.emit("checkStatus", 404, "page does not exist")