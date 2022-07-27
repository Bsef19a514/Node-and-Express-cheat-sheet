//in JS each file is a module in itself
// All the functions and varibles of a file are private to it. Ther can not be accessed outside that file.
const add = (n1, n2) => {
    return n1 + n2
}

const sub = (num1, num2) => {
    return num1 - num2
}
const mul = (num1, num2) => {
    return nnum * num2
}
const myName = "zain"

// module.exports.sub = sub
// module.exports.add = add

//or
module.exports = { add, sub, mul, myName }