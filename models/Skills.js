const mongoose = require('mongoose');

const SkillsSchema = new mongoose.Schema({
  skill: String,
  icon: String
});

module.exports = mongoose.model('Skill', SkillsSchema, 'skills');