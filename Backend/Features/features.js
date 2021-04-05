const router = require("express").Router();
router.use("/GenerateUserName", require("./UserNameGenerator"));
module.exports = router;
