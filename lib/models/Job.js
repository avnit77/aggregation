const mongoose = require('mongoose');


const schema = new mongoose.Schema({
  major: String,
  devType: String,
  yearsCoding: String,
  satisfaction: String
});

module.exports = mongoose.model('Job', schema);
