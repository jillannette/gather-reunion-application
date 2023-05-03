const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  //_id: Schema.Types.ObjectId,  //did not include this originally - is this needed for successful population?
  member: {type: Schema.Types.ObjectId, ref: 'Member'},
  memory: { type: Schema.Types.ObjectId, ref: 'Memory' },
  text: {type: String, required: true},
}, {timestamps: true});

const memorySchema = new Schema({
 // _id: Schema.Types.ObjectId,  ////did not include this originally - is this needed for successful population?
  member: {type: Schema.Types.ObjectId, required: true, ref: 'Member'},
  subject: {type: String, required: true},
  text: {type: String, required: true},
  image_url: {type: String},
  comments: [{ 
    type: Schema.Types.ObjectId, 
    default: [], 
    ref: 'Comment' 
  }]
}, {timestamps: true});

const memberSchema = new Schema({
  //_id: Schema.Types.ObjectId,  //did not include this originally - is this needed for successful population?
  nameAtGraduation: {type: String, required: true},
  currentName: {type: String, required: true},
  email: {type: String, required: true},
  memories: [{ 
    type: Schema.Types.ObjectId, 
    default: [], 
    ref: 'Memory' 
  }],
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);
const Memory = mongoose.model('Memory', memorySchema);
const Member = mongoose.model('Member', memberSchema);

module.exports = {Comment, Memory, Member};