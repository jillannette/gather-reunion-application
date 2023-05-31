const express = require('express');
const router = express.Router();

const {
  getBio,   //search for one person's bio by their name
  deleteBio,  //delete own Bio from user homepage 
  updateBio,  //update own Bio from user homepage 

} = require('../controllers/bioController')

const { memberAccess } = require('../controllers/authController')

router.get('/:id', memberAccess, getBio)

router.delete('/:id', memberAccess, deleteBio)

router.patch('/:id', memberAccess, updateBio)

module.exports = router;

