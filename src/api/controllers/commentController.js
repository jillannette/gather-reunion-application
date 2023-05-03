const {Comment} = require('../models/model');
const mongoose = require('mongoose');

const getAllComments = async (req, res) => {
  console.log('you are here comment')
  const comments = await Comment.find({}).sort({createdAt: -1})
  console.log('comments', comments)
  res.status(200).json(comments);
}
//get a single memory
const getCommentById = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Invalid ID used to retrieve requested comment'})
  }

  const comment = await Comment.findById({_id: id});

  if (!comment) {
    return res.status(404).json({error: 'Comment not found'})
  }

  res.status(200).json(comment)
}

const getCommentsByMemberId = async (req, res) => {
  
}

module.exports = {
  getAllComments, 
  getCommentById,
  getCommentsByMemberId
}