const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const Schema = mongoose.Schema;
const Course = new Schema(
  {
    name: { type: String, maxLegth: 255 },
    description: { type: String, maxLegth: 600 },
    img: { type: String, maxLegth: 255 },
    videoId: { type: String, maxLegth: 255 },
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", Course);
