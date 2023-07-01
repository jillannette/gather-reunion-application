const express = require('express');
const router = express.Router();

const {
  getMemories,
  getMemory,  
  getMemberByMemoryId,
  createMemory,
  createComment,
  getComments,
  deleteMemory,
  updateMemory
} = require('../controllers/memoryController')

router.get('/', getMemories)

router.get('/:id', getMemory);

router.get('/:id/members', getMemberByMemoryId)

router.post('/', createMemory)

router.post('/:id/comments', createComment)

router.get('/:id/comments', getComments)

router.delete('/:id', deleteMemory)

router.patch('/:id', updateMemory)

module.exports = router;