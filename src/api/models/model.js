const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const memorySchema = new Schema({
  subject: {type: String, required: true},
  text: {type: String, required: true}
}, {timestamps: true});

const memberSchema = new Schema({
  nameAtGraduation: {type: String, required: true},
  currentName: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, required: true},
}, { timestamps: true });

module.exports = mongoose.model('Memory', memorySchema);
module.exports = mongoose.model('Member', memberSchema);

// const memorySchema = new Schema({
//   text: {type: String, required: true},
//   images: {type: String, required: true},
//   shared_by: {},
//   comments: [{}]
// }, { timestamps: true });