const express = require("express");
//Using CORS to allow development
var cors = require("cors");
//INITIALIZE EXPRESS
const app = express();
//INITIALIZE CORS
app.use(cors());
//creating endpoints
app.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({ messege: "hello world" });
});
//Directing all routes to endpoints
app.use("/login",require("./Routes/Logins/All_login"));
//setting port to listen
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on PORT: ${port}`));
