const express = require('express');
const router = express.Router();


const {
  getAllMemories,
  getMemory,
  getMemoryComments,
  getMemoryComment,
  createComment,
  deleteComment,
  updateComment
} = require('../controllers/memoryController')

router.get('/', getAllMemories)

router.get('/:id', getMemory);

router.get('/:id/comments', getMemoryComments)

router.get('/:id/comments/:id', getMemoryComment)

router.post('/:id/comments/', createComment)

router.delete('/:id/comments/:id', deleteComment)

router.patch('/:id/comments/:id', updateComment)

module.exports = router;