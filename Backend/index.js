const express = require("express");
//Using CORS to allow development
const cors = require("cors");
const https = require("https");
const fs = require("fs");
const mongoose = require('mongoose');
const path = require("path");
const certificate = fs.readFileSync(path.join(__dirname + "/../server.cert"),"utf-8",(err,data)=>{if (err) throw err});
const privateKey = fs.readFileSync(path.join(__dirname + "/../server.key"),"utf-8",(err,data)=>{if (err) throw err});
//INITIALIZE EXPRESS
const app = express();
var corsOption = {
  origin: 3000
};
app.use(cors(corsOption));
// Connecting DataBase
mongoose.connect(process.env.DBURI,{useNewUrlParser:true, useUnifiedTopology: true});
// Creating Endpoints
app.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({ messege: "hello world" });
});
//Directing routes to endpoints
app.use("/login", require("./Routes/Logins/FbLogin"));
//HTTPS credentials
const credentials = { key: privateKey, cert: certificate };
var httpsServer = https.createServer(credentials, app);
//setting port to listen
const port = process.env.PORT || 5000;

let DB = mongoose.connection;
DB.on('error',console.error.bind(console,"MongoDB connection Error"));
//app.listen(port, () => console.log(`Server running on PORT: ${port}`));
httpsServer.listen(port, () => console.log(`Server running on PORT: ${port}`));
