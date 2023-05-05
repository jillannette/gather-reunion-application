const express = require('express');
const router = express.Router();

const {
  getAllMemories,
  getMemoryById,  
  getMemoriesByMemberId,
  getMemoryByMemberId,
  createMemory,
  createComment,
  deleteMemory,
  updateMemory
} = require('../controllers/memoryController')

router.get('/', getAllMemories)

router.get('/:id', getMemoryById);

router.get('/members/:id', getMemoriesByMemberId);

router.get('/:id/members/:id', getMemoryByMemberId)

router.post('/', createMemory)

router.post('/:id/comments', createComment)

router.delete('/:id', deleteMemory)

router.patch('/:id', updateMemory)

module.exports = router;