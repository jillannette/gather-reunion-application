const {Comment} = require('../models/model');
const mongoose = require('mongoose');

const getComments = async (req, res) => {
  console.log('you are here comment')
  const comments = await Comment.find({}).sort({createdAt: -1})
  console.log('comments', comments)
  res.status(200).json(comments);
}
//get a single memory
const getComment = async (req, res) => {
  const {id} = req.params

  if (!Schema.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Invalid ID used to retrieve requested comment'})
  }

  const comment = await Comment.findById(id);

  if (!comment) {
    return res.status(404).json({error: 'Comment not found'})
  }

  res.status(200).json(comment)
}

//create a new memory
const createComment = async (req, res) => {
  const {text, written_by} = req.body

  //add doc to db
  try {
    const comment = await Comment.create({
      text, written_by
    })
    res.status(200).json(comment)
    } catch (error) {
      res.status(400).json({error: error.message})
  }
}
//delete a memory
const deleteComment = async (req, res) => {
  const {id} = req.params

  if (!Schema.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'Invalid ID used to retrieve requested comment'})
  }

  const comment = await Comment.findOneAndDelete({_id: id});

  if (!comment) {
    return res.status(404).json({error: 'Comment not found'})
  }

  res.status(200).json({message: 'Comment has been deleted from database'})
}

const updateComment = async (req, res) => {
  const {id} = req.params
  console.log({id})
  
  if (!Schema.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Invalid ID used to retrieve requested comment'})
  }

  const comment = await Comment.findOneAndUpdate({_id: id}, {
    ...req.body
  })
  
  if (!comment) {
    return res.status(404).json({error: 'Comment not found'})
  }

  res.status(200).json({message: 'Comment updated!'})
  }

module.exports = {
  getComments, 
  getComment,
  createComment,
  deleteComment,
  updateComment
}