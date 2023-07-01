const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memorySchema = new Schema(
  {
    image_url: { type: String, required: true },
    member: { type: Schema.Types.ObjectId, ref: "Member" },
    subject: { type: String, required: true },
    text: { type: String, required: true },
    comments: [
      {
        memberName: String,
        text: String, //removed timestamp true, refactor using correct syntax
      },
    ],
  },
  { timestamps: true }
);

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
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment"
      }
    ],
  },
  { timestamps: true }
);


//FOR FUTURE USE 
// const registrationSchema = new Schema(   //could be reworked in future using on reunion 
//   {
//   name: { type: String, required: true },
//   email: { type: String, required: true},
//   numberAttending: { type: Number, default: 1, required: true},
//   cost: { type: Number, required: true},
//   }
// )


const nextReunionSchema = new Schema( //schema not needed for this, could just do a route  
  {
    cover_image_url: { type: String, required: true },
    date: String,
    location: String, 
    map: String,
    description: { type: String, required: true },
    registration: { type: Schema.Types.ObjectId, ref: "Registration" },
  }
)

//could replicate comments and just make reunionphotos an array of [reunionphotoschema]
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

//FOR FUTURE USE 
// const Registration = mongoose.model("Registration", registrationSchema);

const Memory = mongoose.model("Memory", memorySchema);
const Member = mongoose.model("Member", memberSchema);
const Reunion = mongoose.model("Reunion", reunionSchema);
const NextReunion = mongoose.model("NextReunion", nextReunionSchema);
const ReunionPhoto = mongoose.model("ReunionPhoto", reunionPhotoSchema);

module.exports = { Memory, Member, Reunion, NextReunion, ReunionPhoto };
