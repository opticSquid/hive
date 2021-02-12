const router = require("express").Router();
const bodyParser = require("body-parser");

router.post("/",bodyParser.urlencoded({extended:false}),bodyParser.json(),(req,res)=>{
    console.log(req.body);
    res.json({m:"done"});
})
exports = module.exports = router;