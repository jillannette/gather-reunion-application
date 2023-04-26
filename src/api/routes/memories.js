const express = require('express');
const router = express.Router();
router.use(express.json());

const {
  getMemories, 
  getMemory,
  createMemory,
  deleteMemory,
  updateMemory
} = require('../controllers/memoryController')

router.get('/', getMemories)

router.get('/:id', getMemory);

router.post('/', createMemory);

router.delete('/:id', deleteMemory);

router.patch('/:id', updateMemory);

module.exports = router;