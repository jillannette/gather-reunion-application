const {Member} = require('../models/model');
const mongoose = require('mongoose');

const getMembers = async (req, res) => {
  console.log('you are here member')
  const members = await Member.find({}).sort({createdAt: -1})
  console.log('members', members)
  res.status(200).json(members);
}

const getMember = async (req, res) => {
  console.log('you are here get single member');
  const {id} = req.params

  if (!Schema.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Invalid ID used to retrieve member profile'})
  }

  const member = await Member.findById(id);

  if (!member) {
    return res.status(404).json({error: 'Member does not exist in database'})
  }
  console.log('you are here get single member')
  res.status(200).json(member)
}

const createMember = async (req, res) => {
  const {nameAtGraduation, currentName, email, phone, memories, comments} = req.body

  try {
    const member = await Member.create({
      nameAtGraduation, currentName, email, phone, memories, comments
    })
    res.status(200).json(member)
    } catch (error) {
      res.status(400).json({error: error.message})
  }
}

const deleteMember = async (req, res) => {
  const {id} = req.params

  if (!Schema.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'Invalid ID used to retrieve member profile'})
  }

  const member = await Member.findOneAndDelete({_id: id});

  if (!member) {
    return res.status(404).json({error: 'Member does not exist in database'})
  }

  res.status(200).json({message: 'Member has been deleted from database'})
}

const updateMember = async (req, res) => {
  const {id} = req.params
  console.log({id})
  
  if (!Schema.Types.ObjectId.isValid(id)) {
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
};