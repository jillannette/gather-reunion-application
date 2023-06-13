const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    memory: { type: Schema.Types.ObjectId, ref: "Memory" },
    member: { type: Schema.Types.ObjectId, ref: "Member" },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const memorySchema = new Schema(
  {
    image_url: { type: String },
    member: { type: Schema.Types.ObjectId, ref: "Member" },
    subject: { type: String, required: true },
    text: { type: String, required: true },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const memberSchema = new Schema(
  {
    email: { type: String, unique: true, lowercase: true, required: true },
    password: { type: String, required: true },
    nameAtGraduation: { type: String, required: true },
    currentName: { type: String, required: true },
    image_url: { type: String, required: false },
    bio: { type: String, required: true },
    memories: [
      {
        type: Schema.Types.ObjectId,
        ref: "Memory",
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const bioSchema = new Schema(
  {
    member: { type: Schema.Types.ObjectId, required: true, ref: "Member" },
    image_url: { type: String },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const reunionSchema = new Schema(
  {
    year: { type: Number, required: true },
    description: { type: String, required: true },
    cover_image_url: [{ type: String }],
    photos: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "ReunionPhoto",
    },
  },
  { timestamps: true }
);

const reunionPhotoSchema = new Schema(
  {
    year: { type: Schema.Types.ObjectId, required: true, ref: "Reunion" },
    image_url: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);
const Memory = mongoose.model("Memory", memorySchema);
const Member = mongoose.model("Member", memberSchema);
// const Bio = mongoose.model('Bio', bioSchema);
const Reunion = mongoose.model("Reunion", reunionSchema);
const ReunionPhoto = mongoose.model("ReunionPhoto", reunionPhotoSchema);

module.exports = { Comment, Memory, Member, Reunion, ReunionPhoto }; //removed bio??
