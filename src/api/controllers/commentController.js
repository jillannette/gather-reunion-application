const {Comment} = require('../models/model');
const mongoose = require('mongoose');

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({})
    .sort({createdAt: -1})
    .populate('member', 'currentName')
  
    res.status(200).json(comments);

  } catch (err) {
    res.status(500).json({err: 'Unable to complete request'})
  }
}

const getCommentById = async (req, res) => {
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

const deleteComment = async (req, res) => {

}

const updateComment = async (req, res) => {

}


module.exports = {
  getAllComments, 
  getCommentById,
  getCommentsByMemoryId,
  getCommentByMemoryId,
  getCommentsByMemberId,
  getCommentByMemberId,
  deleteComment,
  updateComment
}