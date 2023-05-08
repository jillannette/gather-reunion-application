const express = require('express');
const router = express.Router();

const {
  getMemories,
  getMemory,  
  createMemory,
  createComment,
  deleteMemory,
  updateMemory
} = require('../controllers/memoryController')

router.get('/', getMemories)

router.get('/:id', getMemory);

router.post('/', createMemory)

router.post('/:id/comments', createComment)

router.delete('/:id', deleteMemory)

router.patch('/:id', updateMemory)

module.exports = router;