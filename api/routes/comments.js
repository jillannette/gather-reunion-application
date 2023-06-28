const express = require('express');
const router = express.Router();

const {
  getComments, 
  getComment,
  getMemberByCommentId,
  createComment,
  deleteComment,
  updateComment
  
} = require('../controllers/commentController')

router.get('/', getComments)

router.get('/:id', getComment)

router.get('/:id/member', getMemberByCommentId);

router.post('/', createComment);

router.delete('/:id', deleteComment)

router.patch('/:id', updateComment)

module.exports = router;