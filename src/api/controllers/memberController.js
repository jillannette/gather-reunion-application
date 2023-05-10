const {Member} = require('../models/Model')
const mongoose = require('mongoose')

//NEED TO FIGURE OUT SIGNIN 

//THIS WORKS 5-4-23 

const getMembers = async (req, res) => {
  try {
  const members = await Member.find({})
  .sort({createdAt: -1}) 
  .populate('memories', 'text')
  .populate('comments', 'text') 
 
    res.status(200).json(members)
  
  } catch (err) {
    res.status(500).json({
      err: 'An unexpected error has occurred'
    })
  }
}

//THIS WORKS 5-4-23
const getMember = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      err: 'The ID used to locate the resource is not valid'
    })
  }
  
  try {
  const member = await Member.findById({_id: id})  
  .populate('memories', 'text')
  .populate('comments', 'text')
  .populate('bios', 'text')
 
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

//THIS WORKS 5-4-23   SAME AS SIGNUP 
const createMember = async (req, res) => {
  
  const {graduationYear, nameAtGraduation, currentName, email} = req.body  

  const checkDuplicate = await Member.find({ 
    // userName: req.body.userName,
    // password: req.body.password,
    nameAtGraduation: req.body.nameAtGraduation, 
    currentName: req.body.currentName, 
    email: req.body.email 
  })

  if (checkDuplicate.length > 0) {
     return res.status(400).send({ 
      message: "Member already exists" 
    })
  } 
  
  try {
    const member = await Member.create({
      graduationYear, nameAtGraduation, currentName, email
    })
    
    res.status(200).json(member)
     
    } catch (err) {
      res.status(500).json({
        err: 'An unexpected error has occurred'
      })
  }
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
