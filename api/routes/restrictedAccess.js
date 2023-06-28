const express = require('express');
const router = express.Router();

const {
  restrictedAccess,
      
} = require('../controllers/authController')


router.get('/', restrictedAccess)

module.exports = router;