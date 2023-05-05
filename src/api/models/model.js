const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  memory: { type: Schema.Types.ObjectId, ref: 'Memory' },
  member: {type: Schema.Types.ObjectId, ref: 'Member' },
  text: {type: String, required: true},
}, {timestamps: true});

const memorySchema = new Schema({
  member: {type: Schema.Types.ObjectId, ref: 'Member'},
  subject: {type: String, required: true},
  text: {type: String, required: true},
  image_url: {type: String},
  comments: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Comment' 
  }]
}, {timestamps: true});

const memberSchema = new Schema({
  nameAtGraduation: {type: String, required: true},
  currentName: {type: String, required: true},
  email: {type: String, required: true},
  image_url: {type: String},
  memories: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Memory' 
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  aboutMe: {type: Schema.Types.ObjectId, ref: 'AboutMe'}
}, { timestamps: true });

const aboutMeSchema = new Schema({
  member: {type: Schema.Types.ObjectId, ref: 'Member'},
  image_url: String,
  text: {type: String, required: true}
}, {timestamps: true});

const reunionsSchema = new Schema({
  year: {type: Number, required: true},
  image_url: {type: String},
  text: {type: String, required: true}
}, {timestamps: true});

const Comment = mongoose.model('Comment', commentSchema);
const Memory = mongoose.model('Memory', memorySchema);
const Member = mongoose.model('Member', memberSchema);
const AboutMe = mongoose.model('AboutMe', aboutMeSchema);
const Reunions = mongoose.model('Reunions', reunionsSchema)

module.exports = {Comment, Memory, Member, AboutMe, Reunions};