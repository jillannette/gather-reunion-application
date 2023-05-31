const express = require('express');
const router = express.Router();

// these should all be protected 
const {
  getMembers, //get list of all members 
  getMember,  //get specific member page
  deleteMember,  //delete member altogether, should delete memories, comments, reunions?
  updateMember,  //update member page info, username, password 
  
} = require('../controllers/memberController')

const { memberAccess } = require('../controllers/authController')


router.get('/', memberAccess, getMembers)

router.get('/:id', memberAccess, getMember);

router.delete('/:id', memberAccess, deleteMember);

router.patch('/:id', memberAccess, updateMember);


module.exports = router;