const express = require("express");
const router = express.Router();

const {
  getNextReunions,
  getNextReunion,
  createNextReunion,
  addNextReunionMap,
  editNextReunion,
  deleteNextReunion,
} = require("../controllers/nextReunionController");

router.get("/", getNextReunions); 

router.get("/:year", getNextReunion); //nextReunion and Map

router.post("/", createNextReunion)

router.post("/:year", addNextReunionMap);

router.patch('/:id', editNextReunion)

router.delete("/:id", deleteNextReunion)

module.exports = router;
