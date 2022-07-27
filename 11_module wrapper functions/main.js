//() grouping operator
//module wrapper function in NodeJs is same as IIFE in JS.
// When we run a nodejs code , the code is moved into the module wrapper function (function(exports, require, module, __filename, __dirname)) in the backend. That is why all variable and function of a file are private to it.
(function(exports, require, module, __filename, __dirname) {
    const name = "zain"
    console.log(name);
})
console.log(__dirname); //gives the current running directory
console.log(__filename); //gives the current runncing file along with full path