const express = require('express');
const cors = require("cors");
const createError = require('http-errors');
const authRoute = require('./routes/auth');

require("dotenv").config();
require('./db/config');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To parse incoming form data  

// Setting end points for api
app.use('/auth', authRoute);

// Check if route not present
app.use((req, res, next) => {
  next(createError.NotFound());
});

// Every error will be redirected here
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server started at http://localhost:${PORT}`)
);
