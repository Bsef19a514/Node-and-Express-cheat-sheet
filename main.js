console.log("zain");
let bear = {
    sound: "roar",
    roar() {
        console.log(this.sound);
    }
}
const path = require("path")
bear.sound = "grunt";
let bearsound = bear.roar;
bearsound() //undefined

console.log([3] == [3]);

var a
let f = (s = "er") => {
    console.log(s);
}
f(a)
f(null) //no arg, null
console.log(typeof(42.1));

console.log(path.basename("main.js"));