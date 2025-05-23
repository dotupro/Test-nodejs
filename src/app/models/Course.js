const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
const mongooseDelete = require("mongoose-delete");

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

// Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("Course", Course);
