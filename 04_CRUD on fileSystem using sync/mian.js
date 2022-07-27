const { deepStrictEqual } = require('assert');
const fs = require('fs');

//create directory
//fs.mkdirSync("mkdir")
//fs.mkdirSync("C:/Users/Zain/Desktop/NodeJs/MakeDir using full path")

//create a file inside thqat directory
fs.writeFileSync("./mkdir/file1.txt", "this is my file 1");

//append data to the file
fs.appendFileSync("mkdir/file1.txt", ". Appending data to the file 👌.")

//read data from file without getting buffer data
const data = fs.readFileSync("mkdir/file1.txt", "utf-8");
console.log(data);

//renaming the file
fs.renameSync("mkdir/file1.txt", "mkdir/CRUD.txt")

//deleting the file
fs.unlinkSync("mkdir/CRUD.txt")

//deleting a folder
fs.rmdirSync("mkdir")