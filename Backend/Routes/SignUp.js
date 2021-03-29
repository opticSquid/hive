const express = require("express");
const router = express.Router();
const UserDB = require("../Database/Users");
const crypto = require("crypto");
let salt = (length) => {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
};
let encrypt = (Password) => {
  let salted = salt(32);
  let hash = crypto.createHmac("sha3-512", salted).update(Password).digest("hex");
  // Cipher Salt
  const key = process.env.key;
  const iv = crypto.randomBytes(16);
 let Cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
 let encrypted = Cipher.update(salted, "hex", "hex");
 encrypted+= Cipher.final("hex");
  return {
    salt: encrypted,
    iv: iv,
    PassowrdHash: hash,
  };
};
const addUsertoDB = async (UserName, Email, encryptedPass, Buffer) => {
  // Checking if the User already Exists
  let checkUser = await UserDB.findUserEmail(Email);
  let status;
  if (checkUser.length === 0) {
    // If doesn;t exist 
    status = await UserDB.addUser(UserName, Email, encryptedPass, Buffer);
    return { UserExists: false, status: status };
  } else {
    return { UserExists: true };
  }
};
router.post(
  "/",
  express.urlencoded({ extended: true}),
  express.json(),
  (req, res) => {
    let body = req.body;
    let encryptedPass = encrypt(body.Password);
    let param = {Salt: encryptedPass.salt, Password: encryptedPass.PassowrdHash}
    addUsertoDB(body.UserName, body.Email, param, encryptedPass.iv).then((response) => {
      if (response.UserExists === true) {
        res.status(200).json({ m: "Any other User exists having same email", status: 307 });
        console.log("Any other account exists with same email id");
      } else if (response.UserExists === false && "error" in response.status) {
        res.status(200).json({ m: "User having same Credentials exist", status:401 });
        console.log("Users having all same credentials exist in DB already");
      } else {
        res.status(200).json({ m: "User Registered", status:401 });
        console.log("User Registered");
      }
    });
  }
);
exports = module.exports = router;
