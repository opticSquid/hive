const router = require('express').Router();
router.use("/Login",require("./Login"));
router.use("/SignUp",require("./SignUp"));
module.exports = router;