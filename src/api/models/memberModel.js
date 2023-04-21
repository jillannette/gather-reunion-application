const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const memorySchema = new Schema({
  text: {type: String, required: true},
  images: {type: String, required: true},
  sharedBy: {type: String, required: true},
  comments: String,
}, { timestamps: true });

const memberSchema = new Schema({
  nameAtGraduation: {type: String, required: true},
  currentName: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, required: true},
  memories: [memorySchema],
}, { timestamps: true });

module.exports = mongoose.model('Memory', memorySchema);
module.exports = mongoose.model('Member', memberSchema);

