const router = require("express").Router();
const bodyParser = require("body-parser");
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
  let hash = crypto.createHmac("sha3-512", salted);
  hash.update(Password);
  let value = hash.digest("hex");
  return {
    salt: salted,
    PassowrdHash: value,
  };
};
const addUsertoDB = async (UserName, Email, encryptedPass) => {
  let checkUser = await UserDB.findUserEmail(Email);
  let status;
  if (checkUser.length === 0) {
    status = await UserDB.addUser(UserName, Email, encryptedPass);
    return { UserExists: false, status: status };
  } else {
    return { UserExists: true };
  }
};
router.post(
  "/",
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  (req, res) => {
    let body = req.body;
    let encryptedPass = encrypt(body.Password);
    addUsertoDB(body.UserName, body.Email, encryptedPass).then((response) => {
      if (response.UserExists === true) {
        res.status(401).json({ m: "Any other User exists having same email" });
        console.log(1);
      } else if (response.UserExists === false && "error" in response.status) {
        res.status(401).json({ m: "User having same Credentials exist" });
        console.log(2);
      } else {
        res.status(200).json({ m: "User Registered" });
        console.log(3);
      }
    });
  }
);
exports = module.exports = router;
