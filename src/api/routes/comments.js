const express = require('express');
const router = express.Router();

const {
  getAllComments, 
  getCommentById,
  getCommentsByMemoryId,
  getCommentByMemoryId,
  getCommentsByMemberId,
  getCommentByMemberId,
  deleteComment,
  updateComment
  
} = require('../controllers/commentController')

router.get('/', getAllComments)

router.get('/:id', getCommentById)

router.get('/memories/:id', getCommentsByMemoryId);

router.get('/:id/memories/:id', getCommentByMemoryId,)

router.get('/members/:id', getCommentsByMemberId)

router.get('/:id/members/:id', getCommentByMemberId);

router.delete('/:id', deleteComment)

router.patch('/:id', updateComment)

module.exports = router;