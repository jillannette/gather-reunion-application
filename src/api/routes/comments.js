const express = require('express');
const router = express.Router();

const {
  getComments, 
  getComment,
  getMemberByCommentId,
  deleteComment,
  updateComment
  
} = require('../controllers/commentController')

router.get('/', getComments)

router.get('/:id', getComment)

router.get('/:id/member', getMemberByCommentId);


router.delete('/:id', deleteComment)

router.patch('/:id', updateComment)

module.exports = router;