const {Memory, Member, Comment} = require('../models/Model');
const mongoose = require('mongoose');

//THIS WORKS 5-10

const getMemories = async (req, res, next) => {
  console.log('get memories', req.member)

  if (!req.member) {
    next()
    return
  }

  try {
    await Memory.find({})
    .sort({createdAt: -1}) 
    .populate('member', 'nameAtGraduation')
    .populate('comments', 'text')
    .then(memories => {
      res.status(200).json({memories});
    })

  } catch (err) {
    res.status(500).json({
      err: 'An unexpected error has occurred'
    })
  }
} 

//THIS WORKS 5-10-23    BUT, MEMORY "64591787a913313e60d506e6" RETURNS MEMBER AS "NULL"
const getMemory = async (req, res, next) => {
  console.log('get memory', req.member)

  if (!req.member) {
    next()
    return
  }

  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      err: 'The ID used to locate the resource is not valid'
    })
  }

  try {
  const memory = await Memory.findById({_id: id})
  .sort({createdAt: -1})
  .populate('member', 'nameAtGraduation')
  .populate('comments', 'text')

  if (!memory) {
    return res.status(404).json({
      err: 'Memory does not exist in database'
    })
  }
  
  res.status(200).json(memory)

  } catch (err) {
      res.status(500).json({
        err: 'An unexpected error has occurred'
      })
  }
}

//THIS WORKS 5-10   RETURNS MEMBER ID
const getMemberByMemoryId = async (req, res, next) => {
  console.log('get member by memory id', req.member)

  if (!req.member) {
    next()
    return
  }

  const {id} = req.params
    
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      err: 'The ID used to locate the resource is not valid'
    })
  }

  try {
    const selectedMemory = await Memory.findById({_id: id})
    const member = selectedMemory.member
    
    res.status(200).json(member)  
  } catch (err) {
      res.status(500).json({
        err: 'An unexpected error has occurred'
      })
  }
}
 
//THIS WORKS 5-10-23
const createMemory = async (req, res, next) => {
  console.log('create memory', req.member)

  if (!req.member) {
    next()
    return
  }

  const {image_url, member, subject, text } = req.body

  if (member !== req.member.memberId) {
    next()
    return
  }

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
    image_url,
    member,
    subject,
    text
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
    res.status(500).json({
      err: 'Unable to complete request'
    })
  }
}

//REFACTORED 5-10, only works with memberId so far being passed in body
//comment exists in memory and in member
const createComment = async (req, res) => {
  console.log('createComment', req.member)

  if (!req.member) {
    next()
    return
  }
     //memories/:id/comments
  const {id} = req.params   //memoryID

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      err: 'The ID used to locate the resource is not valid'
    })
  }

  const {member, text} = req.body

 

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
  const memberId = req.body.member;
  
  const memoryToUpdate = await Memory.findById(memoryId)
  memoryToUpdate.comments.push(newCommentId)
  memoryToUpdate.save();
  const memberToUpdate = await Member.findById(memberId) 
  memberToUpdate.comments.push(newCommentId)
  memberToUpdate.save()

  res.status(200).json(newComment)

  } catch (error) {
      res.status(500).json({
        err: 'Unable to complete request'
      })
  }
}
 

const deleteMemory = async (req, res, next) => {
  console.log('delete memory', req.member)

  if (!req.member) {
    next()
    return
  }

  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      err: 'The ID used to locate the resource is not valid'
    })
  }

  try {
  const memory = await Memory.findOne({_id: id})
  console.log(memory)

  if (!memory) {
    return res.status(404).json({
      err: 'Memory does not exist in database'
    })
  }

  const member = memory.member.toString();  //5/28 should i try .populate('member').exec(err, member)  then try to delete?????
  console.log('memory.member', member)
  console.log('req.member.memberid', req.member.memberId)

  if (member !== req.member.memberId) {
    console.log('You are not authorized to delete this memory')
    next();
    return
  }

  const deletedMemory = await Memory.deleteOne(memory)  //this worked, deleted own memory
  //works up until this point
  console.log(deletedMemory)

  // 5-27 120pm Did not remove the member's memory 

  const memberId = req.member.memberId
  console.log(memberId)
  
  const memberToUpdate = await Member.findById(memberId)
  console.log(memberToUpdate)

  const index = memberToUpdate.memories.findIndex(
    mem => mem.toString() === id
  )
  console.log(index)

  if (index !== -1) {
    memberToUpdate.memories.splice(index, 1)
  }

  await memberToUpdate.save()

  console.log(memberToUpdate.memories)

  
    

  res.status(200).json({
    message: 'Memory has been deleted from database', 
    deletedMemory
  })

  } catch (err) {
    res.status(500).json({
      err: 'Unable to complete request'
    })
  }
  }
  

//THIS WORKS 5-10-23
const updateMemory = async (req, res, next) => {
  console.log('update memory', req.member)

  if (!req.member) {
    next()
    return
  }

  const {id} = req.params
 
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      err: 'The ID used to locate the resource is not valid'
    })
  }

  try {
  const memory = await Memory.findOneAndUpdate(
    {_id: id}, 
    req.body,
    { new: true }
  )
  
  res.status(200).json({
    message: 'Memory updated!',
    memory
  })   
  
    
  } catch (err) {
    res.status(500).json({
      err: 'Unable to complete request'
    })
  }
} 
  
module.exports = {
  getMemories,
  getMemory,
  getMemberByMemoryId,
  createMemory,
  createComment,
  deleteMemory,
  updateMemory
}