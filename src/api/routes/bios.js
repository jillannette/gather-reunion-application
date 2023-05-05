const express = require('express');
const router = express.Router();

const {
  getBios,
  getBio,
  createBio,
  deleteBio,
  updateBio,

} = require('../controllers/bioController')

router.get('/', getBios)

router.get('/:id', getBio)

router.post('/', createBio)

router.delete('/:id', deleteBio)

router.patch('/:id', updateBio)

module.exports = router;

