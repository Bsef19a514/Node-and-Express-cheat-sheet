 //JSON is a lightweight format for storing and transporting data.
 //JSON is mostly used when data is to be sent from server to web pages.
 //JSON stands for "javascript object notation"
 const obj = {
     name: "zain",
     phone: "03007572462",
     age: 20
 }
 console.log(obj);

 //1: Convert obj to json data (done)
 //2: Write json data in to a file
 //3: read data from file
 //4: convert data to js object

 //1: To convert object to json format
 const jsonData = JSON.stringify(obj)
 console.log(jsonData);




 const fs = require("fs")

 //2: to write json data to a file
 fs.writeFile("JSONdata.json", jsonData, (err) => {
     console.log("error is: " + err);
 })

 //3: to read data from file
 fs.readFile("JSONdata.json", "utf-8", (err, data) => {
     console.log(data);
     //4: to convert json format to object
     const objData = JSON.parse(data)
     console.log(objData);
 })