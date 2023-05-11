const {Member} = require('../models/Model')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');


//NEED TO FIGURE OUT SIGNIN 

//THIS WORKS 5-10-23 

const getMembers = async (req, res) => {
  try {
  const members = await Member.find({})
  .sort({createdAt: -1}) 
  .populate('memories', 'text')
  .populate('comments', 'text')
  .populate('bio')
 
    res.status(200).json(members)
  
  } catch (err) {
    res.status(500).json({
      err: 'An unexpected error has occurred'
    })
  }
}

//THIS WORKS 5-10-23  

const getMember = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      err: 'The ID used to locate the resource is not valid'
    })
  }

  try {
  
  const member = await Member.findById({_id: id})
  .sort({createdAt: -1})
  .populate('memories', 'text')
  .populate('comments', 'text')
  .populate('bio')

  if (!member) {
    return res.status(404).json({
      err: 'Member does not exist in database'
    })
  }
  
  res.status(200).json(member)
 
  } catch (err) {
    res.status(500).json({
      err: 'An unexpected error has occurred'
    })
  }
}
//THIS WORKS 5-11-23   
const createMember = async (req, res) => {

  bcrypt
  .hash(req.body.password,  10)
  .then((hashedPassword) => {
    const member = new Member({
      email: req.body.email, 
      password: hashedPassword,
      nameAtGraduation: req.body.nameAtGraduation,
      currentName: req.body.currentName
    })
      
   member
   .save()
   .then((result) => {
    res.status(200).json({
    message: 'Member account created',
    result,
   })
  })

  .catch((err) => {
    res.status(500).json({
      error: 'Member account not created',
      err,
    })
  })
  })
  .catch((err) => {
    res.status(500).json({
      error: 'Password not hashed successfully',
      err,
    })
  })
}

//THIS WORKS 5-4-23  //THIS APPEARS TO DELETE ALL MEMORIES AND COMMENTS 
const deleteMember = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      err: 'The ID used to locate the resource is not valid'
    })
  }

  try {
  const member = await Member.findOneAndDelete({_id: id})

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
      err: 'An unexpected error has occurred'
    })
  }
}

//THIS WORKS 5-4-23   //THIS APPLIES UPDATED DATA TO MEMORIES/COMMENTS ETC
const updateMember = async (req, res) => {
  const {id} = req.params
 
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      err: 'The ID used to locate the resource is not valid'
    })
  }

  try {
  const member = await Member.findOneAndUpdate(
    {_id: id}, 
    req.body,
    { new: true }
  )
  
  res.status(200).json({
    message: 'Member updated!',
    member
  })   

    if (!member) {
      return res.status(404).json({
        err: 'Member does not exist in database'
      })
    }

    } catch (err) {
      res.status(500).json({
        err: 'An unexpected error has occurred'
      })
    }
}

  module.exports = {
    getMembers, 
    getMember,
    createMember,
    deleteMember,
    updateMember 
}
