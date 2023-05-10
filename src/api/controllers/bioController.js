const {Bio, Member} = require('../models/Model');
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
    return res.status(404).json({err: 'The ID used to locate the resource is not valid'})
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

//THIS WORKS 5-8
const getMemberByBio = async (req, res) => {  //:id/member
  const {id} = req.params
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({err: 'The ID used to locate the resource is not valid'})
  }
  try {
  const selectedBio = await Bio.findById(id)


  const member = selectedBio.member
  
  
  res.status(200).json(member)     //THIS RETURNS THE MEMBER ID 
  }
catch (err) {
  res.status(500).json({err: 'sample error msg'})
}
}


    

   

  
  
  

//THIS WORKS 5-8
const createBio = async (req, res) => {
 
  const {member, image_url, text} = req.body

  const checkDuplicate = await Bio.find({ 
    member: req.body.member,
    text: req.body.text
  });

  if (checkDuplicate.length > 0) {
     return res.status(400).send({ 
      message: "A bio already exists.  Please update the existing bio instead" 
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
  memberToUpdate.bio.push(bioId)
  memberToUpdate.save()
  res.status(200).json(bio)
  }
  catch (err) {
    res.status(500).json({err: 'An unexpected error has occurred'})
  }
}

//THIS WORKS 5-5-23

const deleteBio = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({err: 'The ID used to locate the resource is not valid'})
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
    return res.status(404).json({err: 'The ID used to locate the resource is not valid'})
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
  getMemberByBio,
  createBio,
  deleteBio,
  updateBio,
 
}