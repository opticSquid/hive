//Requiring files for CRUD operations in DB
let fbUsers = require("./Database/FbUsers");
let Users = require("./Database/Users");
const express = require("express");
//Using CORS to allow development
const cors = require("cors");
const https = require("https");
const fs = require("fs");
const path = require("path");
const { MongoClient } = require("mongodb");
const certificate = fs.readFileSync(
  path.join(__dirname + "/../server.cert"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
  }
);
const privateKey = fs.readFileSync(
  path.join(__dirname + "/../server.key"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
  }
);
//INITIALIZE EXPRESS
const app = express();
var corsOption = {
  origin: "https://localhost:3000",
};
app.use(cors(corsOption));
// Connecting DataBase
MongoClient.connect(process.env.DBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  poolSize: 50,
  serverSelectionTimeoutMS: 30000,
  wtimeout: 2500,
})
  .then(async (client) => {
    await fbUsers.injectDB(client);
    await Users.injectDB(client);
    // Creating Endpoints
    app.get("/", (req, res) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json({ messege: "hello world" });
    });
    //Directing routes to endpoints
    app.use("/third-party-login", require("./Routes/Logins/FbLogin"));
    app.use("/Users/Login", require("./Routes/Login"));
    app.use("/Users/SignUp", require("./Routes/SignUp"));
    app.use("/GenerateUserName", require("./Features/UserNameGenerator"));
    //HTTPS credentials
    const credentials = { key: privateKey, cert: certificate };
    var httpsServer = https.createServer(credentials, app);
    //setting port to listen
    const port = process.env.PORT || 5000;
    //app.listen(port, () => console.log(`Server running on PORT: ${port}`));
    httpsServer.listen(port, () =>
      console.log(`Server running on PORT: ${port}`)
    );
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });
