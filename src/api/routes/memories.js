const express = require('express');
const {
  getMemories, 
  getMemory,
  createMemory,
  deleteMemory,
  updateMemory
} = require('../controllers/memoryController')

const router = express.Router();

//GET all memories
router.get('/memories', getMemories)

//GET a single memory
router.get('/memories/:id', getMemory);

//POST a new memory
router.post('/memories', createMemory);

//DELETE a new memory
router.delete('/memories/:id', deleteMemory);

//UPDATE a new memory
router.patch('/memories/:id', updateMemory);


module.exports = router;