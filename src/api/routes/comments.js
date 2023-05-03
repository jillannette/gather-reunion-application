const express = require('express');
const router = express.Router();

const {
  getAllComments, 
  getCommentById,
  getCommentsByMemberId,
  
} = require('../controllers/commentController')

router.get('/', getAllComments)

router.get('/:id', getCommentById)

router.get('/:id', getCommentsByMemberId)   //believe this will not work without differentiating ":id" from previous path

module.exports = router;