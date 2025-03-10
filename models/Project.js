// models/Project.js
const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  logo: {
    type: String, // Store the logo URL
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  services: {
    type: String,
    required: true,
  },
  images: {
    type: [String], // Array of image URLs
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Thumbnail image URL
    required: true,
  },
});

module.exports = mongoose.model("Project", ProjectSchema);