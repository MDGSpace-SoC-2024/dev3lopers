const mongoose = require('mongoose');
require('dotenv').config();
const connectToMongo = async()=>{
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.Mongo_URL);
        console.log("Connected to Mongo Successfully!");
      } catch (error) {
        console.log(error);
      }
    };
    

module.exports = connectToMongo;
