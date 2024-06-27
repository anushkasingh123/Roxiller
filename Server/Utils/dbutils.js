const mongoose = require("mongoose");
const conn = mongoose
  .connect(
    //"mongodb+srv://atlasmongodb50:mongodbatlas@cluster0.bpkjrz8.mongodb.net/Ecom"
    "mongodb+srv://anushkasingh590326:gFbZOTqb88eE3YSI@anushka.3xu5ymb.mongodb.net/Ecom"
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((e) => {
    console.log(error);
  });

module.exports = conn;
