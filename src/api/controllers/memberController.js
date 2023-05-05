const {Member, Memory} = require('../models/model');
const mongoose = require('mongoose');

//THIS WORKS 5-4-23 
const getMembers = async (req, res) => {
  try {
  await Member.find({})
  .sort({createdAt: -1}) 
  .populate('memories', 'text')
  .populate('comments', 'text')  
  .then(members => {
    res.status(200).json(members);
  })
  } catch (err) {
    res.status(500).json({
      err: 'Unable to complete request'
    })
  }
}

//THIS WORKS 5-4-23
const getMember = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({err: 'ID not found'})
  }
  
  try {
  const member = await Member.findById({_id: id})  
  .populate('memories', 'text')
  .populate('comments', 'text')
 
  if (!member) {
    return res.status(404).json({
      err: 'Member does not exist in database'
    })
  }

  res.status(200).json(member)
    
  } catch (err) {
    res.status(500).json({
      err: 'Unable to complete request'
    })
  }
}

//THIS WORKS 5-4-23
const createMember = async (req, res) => {
  
  const {nameAtGraduation, currentName, email} = req.body  

  const checkDuplicate = await Member.find({ 
    nameAtGraduation: req.body.nameAtGraduation, 
    currentName: req.body.currentName, 
    email: req.body.email 
  });

  if (checkDuplicate.length > 0) {
     return res.status(400).send({ 
      message: "Member already exists" 
    });
  } 
  
  try {
    const member = await Member.create({
      nameAtGraduation, currentName, email
    })
    
    res.status(200).json(member)
     
    } catch (err) {
      res.status(500).json({
        err: 'Unable to complete request'
      })
  }
}

//THIS WORKS 5-4-23
const deleteMember = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({err: 'ID not found'})
  }

  try {
  const member = await Member.findOneAndDelete({_id: id});

  if (!member) {
    return res.status(404).json({
      err: 'Member does not exist in database'
    })
  }
  res.status(200).json({
    message: 'Member has been deleted from database', 
    member
  })
  } catch (err) {
  res.status(500).json({
    err: 'Unable to complete request'
  })
  }
}

//THIS WORKS 5-4-23
const updateMember = async (req, res) => {
  const {id} = req.params

 
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({err: 'ID not found'})
  }
  try {
  const member = await Member.findOneAndUpdate(
    {_id: id}, 
    req.body,
    { new: true }
  )
  
  res.status(200).json({message: 'Member updated!', member})   //updatedMember does not show updated content
  
    
  if (!member) {
    return res.status(404).json({err: 'Member does not exist in database'})
  }
 
  } catch (err) {
    res.status(500).json({err: 'Unable to complete request'})
  }
}

  module.exports = {
    getMembers, 
    getMember,
    createMember,
    deleteMember,
    updateMember 
};
