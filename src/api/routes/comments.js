const express = require('express');
const router = express.Router();
router.use(express.json());

const {
  getComments, 
  getComment,
  createComment,
  deleteComment,
  updateComment
} = require('../controllers/commentController')

router.get('/', getComments)

router.get('/:id', getComment);

router.post('/', createComment);

router.delete('/:id', deleteComment);

router.patch('/:id', updateComment);

module.exports = router;