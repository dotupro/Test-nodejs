const { create } = require("express-handlebars");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Course = new Schema({
  name: { type: String, maxLegth: 255 },
  description: { type: String, maxLegth: 600 },
  image: { type: String, maxLegth: 255 },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", Course);
