const mongoose = require("mongoose");

// Import dotenv file
require('dotenv').config()

const connectDB = async () => {
  mongoose.connect(process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to database !!');
    })
    .catch((err)=>{
      console.log('Connection failed !!'+ err.message);
    });
};

module.exports = connectDB;