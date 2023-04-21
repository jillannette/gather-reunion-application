const Member = require('../models/memberModel');
const mongoose = require('mongoose');

//get all members
const getMembers = async (req, res) => {
  const members = await Member.find({}).sort({createdAt: -1})

  res.status(200).json(members);
}
//get a single member
const getMember = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Invalid ID used to retrieve member profile'})
  }

  const member = await Member.findById(id);

  if (!member) {
    return res.status(404).json({error: 'Member does not exist in database'})
  }

  res.status(200).json(member)
}

//create a new member
const createMember = async (req, res) => {
  const {nameAtGraduation, currentName, email, phone, memories} = req.body

  //add doc to db
  try {
    const member = await Member.create({
      nameAtGraduation, currentName, email, phone, memories
    })
    res.status(200).json(member)
    } catch (error) {
      res.status(400).json({error: error.message})
  }
}
//delete a member
const deleteMember = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'Invalid ID used to retrieve member profile'})
  }

  const member = await Member.findOneAndDelete({_id: id});

  if (!member) {
    return res.status(404).json({error: 'Member does not exist in database'})
  }

  res.status(200).json({message: 'Member has been deleted from database'})
}


//update a member
const updateMember = async (req, res) => {
  const {id} = req.params
  console.log({id})
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Invalid ID used to retrieve member profile'})
  }

  const member = await Member.findOneAndUpdate({_id: id}, {
    ...req.body
  })
  
  if (!member) {
    return res.status(404).json({error: 'Member does not exist in database'})
  }

  res.status(200).json({message: 'Member updated!'})
  }



module.exports = {
  getMembers, 
  getMember,
  createMember,
  deleteMember,
  updateMember
}