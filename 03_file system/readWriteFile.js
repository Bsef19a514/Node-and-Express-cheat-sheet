const { log } = require('console');
const fs = require('fs');

//Creates an empty file if not already present and wites data to it. if already preasent then writes data to that file. 
fs.writeFileSync("writeFile.txt", "Hi, i am zain sattar.");
fs.writeFileSync("writeFile.txt", "I am Pakistani. I live in Lahore."); //writeFileSync() overrides the previous written data of the file.
fs.appendFileSync("writeFile.txt", "\nI am a student of SE in PUCIT, lahore.")

const bufferData = fs.readFileSync("writeFile.txt") //returns buffer data

//node.js includes one additional datatype "Buffer" which is not present in normal javascript.
//Buffer is mainly used to store binary data while reading from a file or receiving data packet over a network.
//console.log(bufferData)
const data = bufferData.toString(); //converting buffer data to string
console.log(data);

//to rename a file 
fs.renameSync("writeFile.txt", "ReadWrite.txt")