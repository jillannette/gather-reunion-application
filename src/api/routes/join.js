const express = require('express');
const router = express.Router();

const {
  join
} = require('../controllers/joinController')

router.post('/', join)

module.exports = router;