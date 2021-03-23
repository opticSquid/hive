// Requiring .env config files
require("dotenv").config()

// Requiring Express and MOngoDB
const express = require("express");
const { MongoClient } = require("mongodb");

//Requiring files for CRUD operations in DB
let fbUsers = require("./Database/FbUsers");
let Users = require("./Database/Users");

//Using CORS and other modules to make HTTPS server in development
const cors = require("cors");
const https = require("https");
const fs = require("fs");
const path = require("path");
const certificate = fs.readFileSync(
  path.join(__dirname + "/server.cert"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
  }
);
const privateKey = fs.readFileSync(
  path.join(__dirname + "/server.key"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
  }
);

//INITIALIZE EXPRESS
const app = express();

// Writing a configuration to only accept requests from given frontend address
var corsOption = {
  origin: "http://localhost:3000",
};

// making the express server to use CORS configuration
app.use(cors(corsOption));

// Connecting to remote DataBase
MongoClient.connect(process.env.DBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  poolSize: 50,
  serverSelectionTimeoutMS: 30000,
    wtimeout: 2500
})
  .then(async (DbConnection) => {
    //If the connection to the remote Mongo Server is succeeded then the Mongo Driver returns a connection to DB here it is DbConnection

    //Pushing that connection to the files that do CRUD operation on DB
    await fbUsers.DbConnect(DbConnection);
    await Users.DbConnect(DbConnection);

    // Creating Home Endpoint
    app.get("/", (req, res) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json({ Messege: "Welcome to the backend of Hive" });
    });

    //Directing other routes to respective endpoints
    app.use("/third-party-login", require("./Routes/Third Party Logins/FbLogin"));
    app.use("/Users/Login", require("./Routes/Login"));
    app.use("/Users/SignUp", require("./Routes/SignUp"));
    app.use("/GenerateUserName", require("./Features/UserNameGenerator"));

    //HTTPS credentials
    const credentials = { key: privateKey, cert: certificate };
    var httpsServer = https.createServer(credentials, app);

    //Setting port to listen
    const port = process.env.PORT || 5000;
    httpsServer.listen(port, () =>
      console.log(`Server running on https://localhost:${port}`)
    );
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });
