const express = require("express");
const router = express.Router();

const {
  createNextReunion,
  getNextReunion,
  editNextReunion,
  deleteNextReunion,
} = require("../controllers/nextReunionController");

router.post("/", createNextReunion)

router.get("/:id", getNextReunion) 

router.patch('/:id', editNextReunion)

router.delete("/:id", deleteNextReunion)

module.exports = router;
