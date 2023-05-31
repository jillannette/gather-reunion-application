const {Reunion} = require('../models/Model');
const mongoose = require('mongoose');

//THIS WORKS 5-10

const getReunions = async (req, res, next) => {

  if (!req.member) {
    next()
    return
  }

  try {
    await Reunion.find({})
    .sort({createdAt: -1}) 
    .then(reunions => {
      res.status(200).json({reunions});
    })

  } catch (err) {
    res.status(500).json({
      err: 'An unexpected error has occurred'
    })
  }
} 

//THIS WORKS 5-10-23    BUT, MEMORY "64591787a913313e60d506e6" RETURNS MEMBER AS "NULL"
const getReunionGallery = async (req, res, next) => {

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
    const reunionGallery = await Reunion.findOne({_id: id})
    .populate('year')
    .populate('images')

    if (!reunionGallery) {
      return res.status(404).json({err: 'There are no images to display for this reunion'})
    }
    
    res.status(200).json(reunionGallery)
  
    } catch (err) {
      res.status(500).json({err: 'Unable to complete request'})
    }
  }

   
//THIS WORKS 5-10-23
const updateReunion = async (req, res, next) => {
  console.log('update reunion', req.member)

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
  const reunionToUpdate = await Reunion.findOneAndUpdate(
    {_id: id}, 
    req.body,
    { new: true }
  )
  
  res.status(200).json({
    message: 'Reunion updated!',
    reunionToUpdate
  })   
  
    
  } catch (err) {
    res.status(500).json({
      err: 'Unable to complete request'
    })
  }
} 
  
module.exports = {
  getReunions,
  getReunionGallery,
  updateReunion 
}