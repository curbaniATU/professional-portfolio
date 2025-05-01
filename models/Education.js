const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
  course: String,
  className: String,
  semester: String,
  university: String,
  description: String
});

module.exports = mongoose.model('Education', EducationSchema, 'education');