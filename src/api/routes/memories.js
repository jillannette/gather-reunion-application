const express = require('express');
const router = express.Router();

const {
  getMemories,
  getMemory,  
  getMemberByMemoryId,
  createMemory,
  createComment,
  deleteMemory,
  updateMemory
} = require('../controllers/memoryController')

router.get('/', getMemories)

router.get('/:id', getMemory);

router.get('/:id/members', getMemberByMemoryId)

router.post('/', createMemory)

router.post('/:id/comments', createComment)

router.delete('/:id', deleteMemory)

router.patch('/:id', updateMemory)

module.exports = router;