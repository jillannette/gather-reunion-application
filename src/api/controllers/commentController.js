const {Comment} = require('../models/model');
const mongoose = require('mongoose');

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({})
    .sort({createdAt: -1})
    .populate('member', 'currentName')
  
    res.status(200).json(comments);

  } catch (err) {
    res.status(500).json({err: 'Unable to complete request'})
  }
}

const getComment = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Invalid ID used to retrieve requested comment'})
  }

  try {
  const comment = await Comment.findById({_id: id});

  if (!comment) {
    return res.status(404).json({error: 'Comment not found'})
  }

  res.status(200).json(comment)
} catch (err) {
  res.status(500).json({err: 'Unable to complete request'})
  }
}


const getCommentsByMemoryId = async (req, res) => {
}

const getCommentByMemoryId = async (req, res) => {
  
}

const getCommentsByMemberId = async (req, res) => {

}

const getCommentByMemberId = async (req, res) => {

}

//THIS WORKS 5-5-23
const deleteComment = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({err: 'ID not found'})
  }

  try {
  const comment = await Comment.findOneAndDelete({_id: id});

  if (!comment) {
    return res.status(404).json({
      err: 'Comment does not exist in database'
    })
  }
  res.status(200).json({
    message: 'Comment has been deleted from database', 
    comment
  })
  } catch (err) {
  res.status(500).json({
    err: 'Unable to complete request'
  })
  }
}       

//THIS WORKS 5-5-23
const updateComment = async (req, res) => {
  const {id} = req.params
 
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({err: 'ID not found'})
  }
  try {
  const comment = await Comment.findOneAndUpdate(
    {_id: id}, 
    req.body,
    { new: true }
  )
  
  res.status(200).json({message: 'Comment updated!', comment})   
  
    
  } catch (err) {
    res.status(500).json({err: 'Unable to complete request'})
  }
} 


module.exports = {
  getComments, 
  getComment,
  getCommentsByMemoryId,
  getCommentByMemoryId,
  getCommentsByMemberId,
  getCommentByMemberId,
  deleteComment,
  updateComment
}