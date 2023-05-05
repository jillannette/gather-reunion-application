const {Bio} = require('../models/model');
const {Member} = require('../models/model')
const mongoose = require('mongoose');

//THIS WORKS
const getBios = async (req, res) => {
  try {
  await Bio.find({})
  .sort({createdAt: -1}) 
  .then(bios => {
    res.status(200).json(bios);
  })
  } catch (err) {
    res.status(500).json({
      err: 'Unable to complete request'
    })
  }
}

//THIS WORKS
const getBio = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({err: 'ID not found'})
  }

  try {
  const bio = await Bio.findById({_id: id})
  .sort({createdAt: -1})
  
  if (!bio) {
    return res.status(404).json({err: 'Bio does not exist in database'})
  }
  
  res.status(200).json(bio)

  } catch (err) {
    res.status(500).json({err: 'Unable to complete request'})
  }
}


//THIS WORKS 5-5-23
const createBio = async (req, res) => {
 
  const {member, image_url, text} = req.body

  const checkDuplicate = await Bio.find({ 
    text: req.body.text
  });

  if (checkDuplicate.length > 0) {
     return res.status(400).send({ 
      message: "Bio already exists" 
    });
  } 

  try {
  const bio = new Bio({
    member, image_url, text
  })
  bio.save();
  console.log(bio)

  const bioId = bio._id;
  console.log(bioId)
  const memberId = req.body.member;
   
  const memberToUpdate = await Member.findById(memberId)
  memberToUpdate.bios.push(bioId)
  memberToUpdate.save()
  res.status(200).json(bio)
  }
  catch (err) {
    res.status(500).json({err: 'Unable to create resource'})
  }
}

const deleteBio = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({err: 'ID not found'})
  }

  try {
  const bio = await Bio.findOneAndDelete({_id: id});

  if (!bio) {
    return res.status(404).json({
      err: 'Bio does not exist in database'
    })
  }
  res.status(200).json({
    message: 'Bio has been deleted from database', 
    bio
  })
  } catch (err) {
  res.status(500).json({
    err: 'Unable to complete request'
  })
  }
}

//THIS WORKS 5-5-23
const updateBio = async (req, res) => {
  const {id} = req.params

 
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({err: 'ID not found'})
  }
  try {
  const bio = await Bio.findOneAndUpdate(
    {_id: id}, 
    req.body,
    { new: true }
  )
  
  res.status(200).json({message: 'Bio updated!', bio})   
  
    
  } catch (err) {
    res.status(500).json({err: 'Unable to complete request'})
  }
} 

module.exports = {
  getBios,
  getBio,
  createBio,
  deleteBio,
  updateBio,
 
}