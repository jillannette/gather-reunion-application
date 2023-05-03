const express = require('express');
const router = express.Router();

const {
  getMembers, 
  getMember,
  getMemberMemories,
  getMemberMemory,
  createMember,
  createMemory,
  deleteMember,
  deleteMemberMemory,
  updateMember, 
  updateMemberMemory,
 
} = require('../controllers/memberController')


router.get('/', getMembers)

router.get('/:id', getMember);

router.get('/:id/memories/', getMemberMemories)  //this route does not work, it returns memories of all members 

router.get('/:id/memories/:id', getMemberMemory)

router.post('/', createMember);

router.post('/:id/memories/', createMemory)

router.delete('/:id', deleteMember);

router.delete('/:id/memories/:id', deleteMemberMemory);

router.patch('/:id', updateMember);

router.patch('/:id/memories/:id', updateMemberMemory)

module.exports = router;