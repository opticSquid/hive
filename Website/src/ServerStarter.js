let config = require("dotenv").config()
require("@babel/register");
exports = module.exports = require("../../Backend");
console.log("dotenv",config)