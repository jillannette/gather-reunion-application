const express = require('express');
const router = express.Router();

const {
  getMembers, //get list of all members 
  getMember,  //get specific member page
  createMember,  //part of signup, create member page
  deleteMember,  //delete member altogether, should delete memories, comments, reunions?
  updateMember,  //update member page info, username, password 
  
} = require('../controllers/memberController')


router.get('/', getMembers)

router.get('/:id', getMember);

router.post('/', createMember);

router.delete('/:id', deleteMember);

router.patch('/:id', updateMember);


module.exports = router;