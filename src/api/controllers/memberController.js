const {Member, Memory} = require('../models/model');
const mongoose = require('mongoose');

//const _id = new mongoose.Types.ObjectId();   //need clarification on if this is needed and how to reference in req.body

//THIS WORKS 5-2-23 BUT NO POPULATION 
const getMembers =  (req, res) => {
  Member.find({})
  .sort({createdAt: -1}) //working
  .populate({
    path: "memories",  //[]
    populate: {
      path: "comments"   //nothing
    }
  }) 
  .then(members => {
    res.status(200).json({members});
  })
} 

//THIS WORKS 5-2-23
const getMember = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'ID not found'})
  }
  
  const member = await Member.findById(id)
  .sort({createdAt: -1})
  .populate('memories')  //[] not working even though she has memories 645037775acc0be26e0c3dc2
  
  if (!member) {
    return res.status(404).json({error: 'Member does not exist in database'})
  }
  
  res.status(200).json(member)
}

//THIS WORKS NOW tested member id 645037775acc0be26e0c3dc2
const getMemberMemories = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'ID not found'})
  }

  const memories = await Member.find(Member.memories)
  .sort({createdAt: -1})
  
  res.status(200).json(memories)
  }

//THIS WORKS 5-2
const getMemberMemory = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'ID not found'})
  }

  const memory = await Memory.findOne({_id: id})  //comments: [] 
  
  if (!memory) {
    return res.status (404).json({error: 'Memory does not exist in database'})
  }
  res.status(200).json(memory)
}


  //COULD getMemberComments work with Member.find(Member.memories.comments?)
  //OR, does this belong in comments controller?

//NOT SURE THIS ROUTE IS EVEN POSSIBLE!!!
// const getMemberComments = async (req, res) => {
//   const {id} = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({error: 'ID not found'})
//   }

//   const comments = await Comment.find({})
//   .sort({createdAt: -1})
//   res.status(200).json(comments)
// }
// //NOT SURE POSSIBLE?
// const getMemberComment = async (req, res) => {
//   const {memberId, memoryId} = req.params

//   if (!mongoose.Types.ObjectId.isValid(memberId, memoryId)) {
//     return res.status(404).json({error: 'ID not found'})
//   }

//   const comment = await Comment.findById({_id: id})

//   if (!comment) {
//     return res.status (404).json({error: 'Comment not found'})
//   }
//   res.status(200).json(comment)
// }

//THIS WORKS 5-1-23
const createMember = async (req, res) => {
   
  const {_id, nameAtGraduation, currentName, email, memories} = req.body  //SHOULD CREATE NEW OBJECTID?

  try {
    const member = await Member.create({
      _id, nameAtGraduation, currentName, email, memories
    })
    
    res.status(200).json(member)
    } catch (error) {
      res.status(400).json({error: error.message})
  }
}


//THIS WORKS 5-2 member has oid
const createMemory = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'ID not found'})
  }

  const {member, subject, text, image} = req.body

  try {
    const memory = Memory.create({
      member, subject, text, image
    })
    
    res.status(200).json(memory)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
  
}


//THIS WORKS 5-1-23
const deleteMember = async (req, res) => {
  const {memberId} = req.params

  if (!mongoose.Types.ObjectId.isValid(memberId)) {
    return res.status(400).json({error: 'ID not found'})
  }

  const member = await Member.findOneAndDelete({_id: id});

  if (!member) {
    return res.status(404).json({error: 'Member does not exist in database'})
  }

  res.status(200).json({message: 'Member has been deleted from database', member})
}

const deleteMemberMemory = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(memberId)) {
    return res.status(400).json({error: 'ID not found'})
  }

  const memory = await Memory.findOneAndDelete({_id: id});

  if (!memory) {
    return res.status(404).json({error: 'Memory does not exist in database'})
  }

  res.status(200).json({message: 'Memory has been deleted from database', memory})
}
//THIS WORKS 5-1-23
const updateMember = async (req, res) => {
  const {memberId} = req.params
  
  
  if (!mongoose.Types.ObjectId.isValid(memberId)) {
    return res.status(404).json({error: 'ID not found'})
  }

  const member = await Member.findOneAndUpdate({_id: id}, {
    ...req.body
  })
  
  if (!member) {
    return res.status(404).json({error: 'Member does not exist in database'})
  }

  res.status(200).json({message: 'Member updated!', member})
  }

  const updateMemberMemory = async (req, res) => {
    const {memberId} = req.params
    console.log({id})
    
    if (!mongoose.Types.ObjectId.isValid(memberId)) {
      return res.status(404).json({error: 'ID not found'})
    }
  
    const memory = await Memory.findOneAndUpdate({_id: id}, {
      ...req.body
    })
    
    if (!memory) {
      return res.status(404).json({error: 'Memory does not exist in database'})
    }
  
    res.status(200).json({message: 'Memory updated!', memory})
    }

  module.exports = {
    getMembers, 
    getMember,
    getMemberMemories,
    getMemberMemory,
    // getMemberComments, 
    // getMemberComment,
    createMember,
    createMemory,
    deleteMember,
    deleteMemberMemory,
    updateMember, 
    updateMemberMemory,
};
