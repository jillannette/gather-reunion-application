const {Comment} = require('../models/Model');
const mongoose = require('mongoose');

const getComments = async (req, res, next) => {
  console.log('get comments', req.member)

  if (!req.member) {
    next()
    return
  }

  try {
    const comments = await Comment.find({})
    .sort({createdAt: -1})
    .populate('member', 'currentName')
  
    res.status(200).json(comments);

  } catch (err) {
    res.status(500).json({err: 'Unable to complete request'})
  }
}

const getComment = async (req, res, next) => {
  console.log('get comment', req.member)

  if (!req.member) {
    next()
    return
  }

  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'The ID used to locate the resource is not valid'})
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



const getMemberByCommentId = async (req, res, next) => {  //:id/comment
  console.log('get member by comment id', req.member)

  if (!req.member) {
    next()
    return
  }

  const {id} = req.params
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({err: 'The ID used to locate the resource is not valid'})
  }
  try {
  const selectedComment = await Comment.findById({_id: id})
    console.log(selectedComment)

  const member = selectedComment.member
  
  console.log(member)
  res.status(200).json(member)  
  console.log(member)   //THIS RETURNS THE MEMBER ID 
  }
catch (err) {
  res.status(500).json({err: 'sample error msg'})
}
}



//THIS WORKS 5-5-23
const deleteComment = async (req, res, next) => {
  console.log('delete comment', req.member)

  if (!req.member) {
    next()
    return
  }

  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({err: 'The ID used to locate the resource is not valid'})
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
const updateComment = async (req, res, next) => {
  console.log('update comment', req.member)

  if (!req.member) {
    next()
    return
  }

  const {id} = req.params
 
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({err: 'ID The ID used to locate the resource is not valid'})
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
  getMemberByCommentId,
  deleteComment,
  updateComment
}