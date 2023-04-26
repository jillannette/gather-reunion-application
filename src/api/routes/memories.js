const express = require('express');
const router = express.Router();
router.use(express.json());

const {
  getMemories, 
  getMemory,
  createMemory,
  deleteMemory,
  updateMemory
} = require('../controllers/memoryController')



//GET all memories
router.get('/', getMemories)

//GET a single memory
router.get('/:id', getMemory);

//POST a new memory
router.post('/', createMemory);

//DELETE a new memory
router.delete('/:id', deleteMemory);

//UPDATE a new memory
router.patch('/:id', updateMemory);


module.exports = router;