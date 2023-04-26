const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  memory: { type: Schema.Types.ObjectId, ref: 'Memory' },
  text: {type: String, required: true},
  written_by: { type: Schema.Types.ObjectId, ref: 'Member'},
}, {timestamps: true});

const memorySchema = new Schema({
  subject: {type: String, required: true},
  text: {type: String, required: true},
  shared_by: { type: Schema.Types.ObjectId, ref: 'Member' },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, {timestamps: true});

const memberSchema = new Schema({
  nameAtGraduation: {type: String, required: true},
  currentName: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, required: true},
  memories: [{ type: Schema.Types.ObjectId, ref: 'Memory' }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);
const Memory = mongoose.model('Memory', memorySchema);
const Member = mongoose.model('Member', memberSchema);

module.exports = {Comment, Memory, Member};

