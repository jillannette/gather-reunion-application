const express = require('express');
const router = express.Router();
router.use(express.json());

const {
  getMembers, 
  getMember,
  createMember,
  deleteMember,
  updateMember
} = require('../controllers/memberController')

router.get('/', getMembers)

router.get('/:id', getMember);

router.post('/', createMember);

router.delete('/:id', deleteMember);

router.patch('/:id', updateMember);

module.exports = router;