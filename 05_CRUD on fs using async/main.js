const fs = require("fs")

//create folder/directory
fs.mkdir("make Dir using async", (err) => {
    console.log(err);
})

//write file
fs.writeFile("writeFile.txt", "hi, i am zain sattar.", (err) => {
    console.log("Finished");
    console.log(err);
})

//append data to the file
fs.appendFile("writeFile.txt", " I live in Lahore.", (err) => {
    console.log("Data Appended successfully");
    console.log(err);
})

//read data from file
fs.readFile("writeFile.txt", "UTF-8", (err, data) => { //utf-8 is used to get data in string ...if you want to get data in Buffer then skip it
    console.log(data);
    console.log(err);
})
console.log("After the data");

//rename file
fs.rename("writeFile.txt", "readWrite.txt", () => {
    console.log("File renamed successfully.");
})

//delete file
fs.unlink("writeFile.txt", (err) => {
    console.log("File deleted successfully.");
    console.log(err);
})

//delete dir/Folder
fs.rmdir("make Dir using async", (err) => {
    console.log(err);
})