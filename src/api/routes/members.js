const express = require('express');
const router = express.Router();

const {
  getMembers, 
  getMember,
  createMember,
  createMemory,
  deleteMember,
  updateMember, 
  
} = require('../controllers/memberController')


router.get('/', getMembers)

router.get('/:id', getMember);

router.post('/', createMember);

router.delete('/:id', deleteMember);

router.patch('/:id', updateMember);


module.exports = router;