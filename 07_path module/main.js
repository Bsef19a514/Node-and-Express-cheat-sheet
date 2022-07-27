const path = require("path")

//returns the directory name from given url
console.log(path.dirname("C:/Users/Zain/Desktop/NodeJs/07_path module/main.js"));

//returns the extention of file from given url
console.log(path.extname("C:/Users/Zain/Desktop/NodeJs/07_path module/main.js"));

//get the nmae of file or directory from given url
console.log(path.basename("C:/Users/Zain/Desktop/NodeJs/07_path module/main.js"));

const myPath = path.parse("C:/Users/Zain/Desktop/NodeJs/07_path module/main.js")
console.log(myPath);
console.log(myPath.name);