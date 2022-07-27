//Encryption means encoding your message by appling some fomula and
// then decoding it back to original message by reversing the formula
//like message= abcd  so to encode it we simply add 2 to each character like defg
//encoding is a two way comminication

//Hashing is more secure than
//some hashing algorithms are
//1) MD5 (for php developers) not so good (can be cracked in 2 sec)
//2) bcrypt(4 rounds) takes 159 days to crack
//2) bcrypt(12 rounds) takes 3 years to crack

const bcrypt = require("bcryptjs")

const securePassword = async(password) => {
    const hash = await bcrypt.hash(password, 10) //10 is default value . 10 means number of rounds. more rounds means more secure.
    console.log(typeof(hash));

    const isMatched = await bcrypt.compare(" zain", hash)
    console.log(isMatched);
}
const password = "zain"
securePassword(password)