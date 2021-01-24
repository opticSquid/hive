const express = require("express");
//require("dotenv").config();
const router = express.Router();
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
//console.log("Clinet Secret ",process.env);
//END POINTS
router.get("/fblogin", (req, res) => {
  //Facebook Login Goes here
  res.setHeader("Content-Type", "application/json");
  passport.use(
    new FacebookStrategy(
      {
        clientID: "3921403001203159",
        clientSecret: "22fc1444694a8d4650f01b58b7783a06",
        callbackURL: "https://localhost:5000/login/fblogin",
      },
      (accessToken, refreshToken, profile, cb) => {
        console.log(accessToken);
        res.json({ messege: "loggedin" });
        return cb(null, profile);
      }
    )
  );
});

module.exports = router;
