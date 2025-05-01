const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  link: String
});


module.exports = mongoose.model('Project', ProjectsSchema, 'projects');