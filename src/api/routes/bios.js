const express = require('express');
const router = express.Router();

const {
  getBios,  //search for all bios from home page
  getBio,   //search for one person's bio by their name
  getMemberByBio,
  createBio,  //create own Bio on user homepage 
  deleteBio,  //delete own Bio from user homepage 
  updateBio,  //update own Bio from user homepage 

} = require('../controllers/bioController')

router.get('/', getBios)

router.get('/:id', getBio)

router.get('/:id/member', getMemberByBio)

router.post('/', createBio)

router.delete('/:id', deleteBio)

router.patch('/:id', updateBio)

module.exports = router;

