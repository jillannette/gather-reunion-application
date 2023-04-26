const {Memory} = require('../models/model');
const mongoose = require('mongoose');

//get all memories
const getMemories = async (req, res) => {
  console.log('you are here memory')
  const memories = await Memory.find({}).sort({createdAt: -1})
  console.log('memories', memories)
  res.status(200).json(memories);
}
//get a single memory
const getMemory = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Invalid ID used to retrieve requested memory'})
  }

  const memory = await Memory.findById(id);

  if (!memory) {
    return res.status(404).json({error: 'Memory not found'})
  }

  res.status(200).json(memories)
}

//create a new memory
const createMemory = async (req, res) => {
  const {subject, text} = req.body

  //add doc to db
  try {
    const memory = await Memory.create({
      subject, text
    })
    res.status(200).json(memory)
    } catch (error) {
      res.status(400).json({error: error.message})
  }
}
//delete a memory
const deleteMemory = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'Invalid ID used to retrieve requested memory'})
  }

  const memory = await Memory.findOneAndDelete({_id: id});

  if (!memory) {
    return res.status(404).json({error: 'Memory not found'})
  }

  res.status(200).json({message: 'Memory has been deleted from database'})
}


//update a memory
const updateMemory = async (req, res) => {
  const {id} = req.params
  console.log({id})
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Invalid ID used to retrieve requested memory'})
  }

  const memory = await Memory.findOneAndUpdate({_id: id}, {
    ...req.body
  })
  
  if (!memory) {
    return res.status(404).json({error: 'Memory not found'})
  }

  res.status(200).json({message: 'Memory updated!'})
  }

module.exports = {
  getMemories, 
  getMemory,
  createMemory,
  deleteMemory,
  updateMemory
}