const {Memory} = require('../models/model');
const mongoose = require('mongoose');

const getAllMemories = async (req, res) => {

  const memories = await Memory.find({})
  res.status(200).json(memories)
}

const getMemory = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'ID used is invalid'})
  }

  const memory = await Memory.findById({_id: id});

  if (!memory) {
    return res.status(404).json({error: 'Memory not found'})
  }

  res.status(200).json(memories)
}

const getMemoryComments = async (req, res) => {
  const {memoryId} = req.params

  if (!mongoose.Types.ObjectId.isValid(memoryId)) {
    return res.status(404).json({error: 'ID used is invalid'})
  }

  const comments = Comment.find({})
  res.status(200).json(comments)
}

const getMemoryComment = async (req, res) => {
  const {memoryId} = req.params

  if (!mongoose.Types.ObjectId.isValid(memoryId)) {
    return res.status(404).json({error: 'ID used is invalid'})
  }

  const comment = Comment.findById({_id: id}) 

  if (!comment) {
    return res.status(404).json({error: 'Comment not found'})
  }
  res.status(200).json(comment)
}

const createComment = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'ID used is not valid'})
  }

  const {member, memory, text} = req.body

  try {
    const memory = Memory.create({
      member, memory, text
    })
    
    res.status(200).json(memory)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
  
}

const deleteComment = async (req, res) => {
  const {memoryId}  = req.params

  if (!mongoose.Types.ObjectId.isValid(memoryId)) {
    return res.status(404).json({error: 'ID used is invalid'})
  }

  const comment = Comment.findById({_id: id})

  if (!comment) {
    res.status(404).json({error: 'Comment not found'})
  }

  res.status(200).json({message: 'Comment deleted', comment})
}

const updateComment = async (req, res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'ID used is invalid'})
  }

  const comment = Comment.findById({_id: id}) 

    if(!comment) {
      res.status(404).json({error: 'Comment not found'})
    }

    res.status(200).json({message: 'Comment updated', comment})
  }

module.exports = {
  getAllMemories,
  getMemory,
  getMemoryComments,
  getMemoryComment,
  createComment,
  deleteComment,
  updateComment
}
