//npm stands for node package manager.
// In order to use npm, we need to initialite it by writing "npm init" in the terminal
//node_modules directory contains the code for our dependency.

import c from 'chalk';
//const chalk = require('chalk')
console.log(c.blue.bold.italic.underline("Hello world"));
console.log(c.green.underline.inverse("Successful"));
console.log(c.red.inverse("Failed"));

import validator from "validator"
const flag = validator.isEmail("zainsattar17gmail.com")
console.log(flag ? c.green.inverse(flag) : c.red.inverse(flag));
console.log(validator.isDate("10-11-2022", "DD/MM/YYYY"))
console.log(validator.isNumeric("nekjrh8389"));
console.log(validator.isAlphanumeric("nekjrh8389"));
console.log(validator.isStrongPassword("@nekJKHrh8389"));