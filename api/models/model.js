const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema(
  {
    email: { type: String, lowercase: true, required: true },
    password: { type: String, required: true },
    nameAtGraduation: { type: String, required: true },
    currentName: { type: String, required: true },
    residesIn: { type: String, required: true },
    image_url: { type: String, required: false },
    bio: { type: String, required: true },
    memories: [
      {
        type: Schema.Types.ObjectId,
        ref: "Memory",
      },
    ],
  },
  { timestamps: true }
);
    
const memorySchema = new Schema(
  {
    image_url: { type: String, required: true },
    member: { type: Schema.Types.ObjectId, ref: "Member" },
    subject: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const nextReunionSchema = new Schema( 
  {
    cover_image_url: { type: String, required: true },
    date: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
  }, 
  { timestamps: true }
);

const reunionSchema = new Schema(   
  {
    year: { type: Number, required: true },
    description: { type: String, required: true },
    cover_image_url: { type: String, required: true },
    reunionPhotos: [
      {
        type: Schema.Types.ObjectId,
        ref: "ReunionPhoto",
      },
    ],
  },
  { timestamps: true }
);

const reunionPhotoSchema = new Schema(
  {
    reunion: { type: Schema.Types.Number, required: true, ref: "Reunion" },
    image_url: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Member = mongoose.model("Member", memberSchema);
const Memory = mongoose.model("Memory", memorySchema);
const NextReunion = mongoose.model("NextReunion", nextReunionSchema);
const Reunion = mongoose.model("Reunion", reunionSchema);
const ReunionPhoto = mongoose.model("ReunionPhoto", reunionPhotoSchema);

module.exports = { Member, Memory, NextReunion, Reunion, ReunionPhoto };
