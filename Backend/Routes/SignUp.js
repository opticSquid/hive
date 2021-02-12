const router = require("express").Router();
const bodyParser = require("body-parser");
const UserDB = require("../Database/Users");
const crypto = require("crypto");
let salt = (length)=>{
    return crypto.randomBytes(Math.ceil(length/2)).toString('hex').slice(0,length);
}
let encrypt = (Password) =>{
    let salted = salt(32);
    let hash = crypto.createHmac('sha3-512',salted);
    hash.update(Password);
    let value = hash.digest('hex');
    return {
        salt: salted,
        PassowrdHash:value
    }
}
router.post("/",bodyParser.urlencoded({extended:false}),bodyParser.json(),(req,res)=>{
    let body = req.body
    let encryptedPass = encrypt(body.Password);
    UserDB.addUser(body.UserName,body.Email,encryptedPass);
    res.json({m:"done"});
})
exports = module.exports = router;