const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/prider_education_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = { connect };
