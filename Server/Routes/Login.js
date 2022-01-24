const express= require("express");
const router = express.Router();
const userDB = require("../Database/Users");
const activeSession = require("../Database/ActiveSession");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const CheckUserForExisting = async (Email) =>{
    let Exists = await userDB.findUserEmail(Email);
    return Exists;
}
const decipher = (salt,iv, ReqPassword) =>{
 const key  = process.env.key;
 // Decrypting Salt
 let dec = crypto.createDecipheriv("aes-256-cbc",key,iv.buffer);
 let decrypted = dec.update(salt,"hex","hex");
 decrypted += dec.final("hex");
 // Encrypting Req Pass with decrypted Salt
 const hashedReqPass = crypto.createHmac("sha3-512", decrypted).update(ReqPassword).digest("hex");
 return hashedReqPass;

}

const addActiveSession = async(token) =>{
    let active = await activeSession.addActiveUser(token);
    if (active.success===true)
    {
        return {sessionActive:true};
    }
    else
    {
        return {sessionActive:false};
    }
}

router.post("/",express.urlencoded({extended:true}),express.json(),(req,res)=>{
    let body = req.body;
    CheckUserForExisting(body.Email).then((response)=>{
        const reqPassword = decipher(response[0].Params.Salt, response[0].iv, body.Password)
        if (reqPassword === response[0].Params.Password)
        {
            console.log("Login Succeeded");

            //Creating User Object to Serialize in JWT
            const user = {UserName:response[0].UserName, Email:response[0].Email};
            const accessToken=jwt.sign(user,process.env.JWT_ACCESS_TOKEN_SECRET,{expiresIn:"900s"});
            const refreshToken = jwt.sign(user,process.env.JWT_REFRESH_TOKEN_SECRET);
            //Adding the refresh token to the session list in DB so that when their session expires they can again ask for s Access token
            addActiveSession(refreshToken).then((response)=>{
            if(response.sessionActive===true)
            {   
                res.status(200).json({status:"Login Successful",AccesToken:accessToken,RefreshToken:refreshToken});
            }
            else
            {
                res.status(500).json({status:"Login UnSuccessful! Internal Server Error",AccesToken:null,RefreshToken:null});
            }
            });
        }
        else
        {
            console.log("Email or Passoword Wrong");
            res.status(401).json({status:"Login not authorized",AccesToken:null,RefreshToken:null});
        }

    }).catch((err)=>{
        console.error("Something Went Wrong While Logging in \n", err);
        res.status(400).json({status:"Some thing went wrong try refreshing the page and logging in again"})
    });
})
exports = module.exports = router;