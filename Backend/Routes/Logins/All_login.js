const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
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
})
exports = module.exports = router;
