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
  // userName: {type: String, required: true},
  // password: {type: String, required: true}, //need type validation
  graduationYear: {type: Number, require: true},
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
  bio: [{type: Schema.Types.ObjectId, 
    ref: 'Bio'
  }]
}, { timestamps: true });

const bioSchema = new Schema({
  member: {type: Schema.Types.ObjectId, 
  required: true,
  ref: 'Member'
  },
  image_url: {type: String},
  text: {type: String, required: true}
}, {timestamps: true});

const reunionSchema = new Schema({
  nextReunionCounter: {type: Date, required: true},
  year: {type: Number, required: true},
  image_url: {type: String},
  attendees: {type: String},
  memories: {type: String, required: true}
}, {timestamps: true});

const Comment = mongoose.model('Comment', commentSchema);
const Memory = mongoose.model('Memory', memorySchema);
const Member = mongoose.model('Member', memberSchema);
const Bio = mongoose.model('Bio', bioSchema);
const Reunion = mongoose.model('Reunion', reunionSchema)

module.exports = {Comment, Memory, Member, Bio, Reunion};