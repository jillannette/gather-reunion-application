const express = require('express');
const router = express.Router();

const {
  getMembers, 
  getMember,  
  deleteMember, 
  updateMember, 
  
} = require('../controllers/memberController')

router.get('/', getMembers)

router.get('/:id', getMember);

router.delete('/:id', deleteMember);

router.patch('/:id', updateMember);


module.exports = router;