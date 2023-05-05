const {Memory} = require('../models/model');
const {Comment} = require('../models/model');
const {Member} = require('../models/model')
const mongoose = require('mongoose');

//THIS WORKS 5-4
const getMemories = async (req, res) => {
  try {
    await Memory.find({})
    .sort({createdAt: -1}) 
    .populate('comments', 'text')
    .then(memories => {
      res.status(200).json({memories});
    })
  } catch (err) {
    res.status(500).json({err:  'Unable to complete request'})
  }
} 

//THIS WORKS 5-4-23
const getMemory = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({err: 'ID not found'})
  }

  try {
  const memory = await Memory.findById({_id: id})
  .sort({createdAt: -1})
  .populate('comments', 'text')

  if (!memory) {
    return res.status(404).json({err: 'Memory does not exist in database'})
  }
  
  res.status(200).json(memory)

  } catch (err) {
    res.status(500).json({err: 'Unable to complete request'})
  }
}

//THIS WORKS 5-4-23
const createMemory = async (req, res) => {
 
  const {member, subject, text, image_url} = req.body

  const checkDuplicate = await Memory.find({ 
    text: req.body.text
  });

  if (checkDuplicate.length > 0) {
     return res.status(400).send({ 
      message: "Memory already exists" 
    });
  } 

  try {
  const newMemory = await Memory.create({
    member, subject, text, image_url
  })
  newMemory.save();

  const newMemoryId = newMemory._id;
  const memberId = req.body.member;
   
  const memberToUpdate = await Member.findById(memberId)
  memberToUpdate.memories.push(newMemoryId)
  memberToUpdate.save()
  res.status(200).json(newMemory)
  }

  catch (error) {
    res.status(400).json({
      err: 'Member could not be created'
    })
  }
}

//THIS WORKS!!!!!  5-4
const createComment = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'ID not found'})
  }

  const {memory, member, text} = req.body

  const checkDuplicate = await Comment.find({ 
    text: req.body.text
  });

  if (checkDuplicate.length > 0) {
     return res.status(400).send({ 
      message: "Comment already exists" 
    });
  } 

  try {
  const newComment = await new Comment({
    memory, member, text
  })
  newComment.save();
  
  const newCommentId = newComment._id;
  const memoryId = req.body.memory;
  
  const memoryToUpdate = await Memory.findById(memoryId)
  memoryToUpdate.comments.push(newCommentId)
  memoryToUpdate.save()

    res.status(200).json(newComment)

  } catch (error) {
    res.status(500).json({
      err: 'Unable to complete request'
    })
  }
}
  
const getMemoriesByMemberId = async (req, res) => {

}
const getMemoryByMemberId = async (req, res) => {
}
  
//THIS WORKS 5-5-23
const deleteMemory = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({err: 'ID not found'})
  }

  try {
  const memory = await Memory.findOneAndDelete({_id: id});

  if (!memory) {
    return res.status(404).json({
      err: 'Memory does not exist in database'
    })
  }
  res.status(200).json({
    message: 'Memory has been deleted from database', 
    memory
  })
  } catch (err) {
  res.status(500).json({
    err: 'Unable to complete request'
  })
  }
}       

//THIS WORKS 5-5-23
const updateMemory = async (req, res) => {
  const {id} = req.params
 
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({err: 'ID not found'})
  }
  try {
  const memory = await Memory.findOneAndUpdate(
    {_id: id}, 
    req.body,
    { new: true }
  )
  
  res.status(200).json({message: 'Memory updated!', memory})   
  
    
  } catch (err) {
    res.status(500).json({err: 'Unable to complete request'})
  }
} 
  
module.exports = {
  getMemories,
  getMemory,
  getMemoriesByMemberId,
  getMemoryByMemberId,
  createMemory,
  createComment,
  deleteMemory,
  updateMemory
}
