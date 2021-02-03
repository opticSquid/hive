const express = require("express");
const router = express.Router();
var cors = require("cors");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
//Initializing passport
router.use(passport.initialize());
//Initializing passport Session
router.use(passport.session());
const options = {
  origin: "*",
  optionsSuccessStatus: 200,
};
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.APPID,
      clientSecret: process.env.clientSecret,
      callbackURL: "https://localhost:5000/login/fblogin/callback",
      profileFields: ["id", "name"],
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(profile);
      return cb(null, profile);
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

//END POINTS
router.get(
  "/fblogin",cors(options),
  passport.authenticate("facebook", { scope: "public_profile" })
);
router.get(
  "/fblogin/callback",
  passport.authenticate("facebook", {
    successRedirect: "callback/profile",
    failureRedirect: "callback/failed",
  }),
  (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
  }
);
router.get("/fblogin/callback/profile", (req, res) => {
  res.status(200).json({ messege: "You are a valid user" });
});
router.get("/fblogin/callback/failed", (req, res) => {
  res.json({ messege: "You are not a valid user" });
});
exports = module.exports = router;
