const express = require('express');
const {
  getMembers, 
  getMember,
  createMember,
  deleteMember,
  updateMember
} = require('../controllers/memberController')

const router = express.Router();

//GET all members
router.get('/', getMembers)

//GET a single member
router.get('/:id', getMember);

//POST a new member
router.post('/', createMember);

//DELETE a new member
router.delete('/:id', deleteMember);

//UPDATE a new member
router.patch('/:id', updateMember);


module.exports = router;