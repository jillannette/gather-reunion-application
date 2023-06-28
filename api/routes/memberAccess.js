const express = require('express');
const router = express.Router();

const {
  memberAccess,
      
} = require('../controllers/authController')


router.get('/', memberAccess)

module.exports = router;