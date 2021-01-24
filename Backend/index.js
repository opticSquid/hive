const express = require("express");
//INITIALIZE EXPRESS
const app = express();

//creating endpoints
app.get("/",(req,res)=>{
    res.send("hello world");
});

//setting port to listen
const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`Server running on PORT: ${port}`));


