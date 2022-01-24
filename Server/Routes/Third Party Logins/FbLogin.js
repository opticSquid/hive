const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
let Fbuser = require("../../Database/FbUsers");
// router.use(bodyParser.urlencoded({extended:false}));
// router.use(bodyParser.json());
//fb login
router.get("/fblogin",(req,res)=>{
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({ID: process.env.APPID})
  console.log(process.env.APPID);
});
router.post("/fblogin/submit",bodyParser.urlencoded({extended: false}),bodyParser.json(),(req,res)=>{
  console.log(req.body);
  Fbuser.addUser(req.body.name,req.body.email,req.body.userID,req.body.accessToken,req.body.picture);
})
exports = module.exports = router;
