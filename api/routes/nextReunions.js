const express = require("express");
const router = express.Router();

const {
  getNextReunions,
  // getNextReunion,
  // createNextReunion,
  addNextReunionMap,
  getNextReunionDirections,
  editNextReunion,
  deleteNextReunion,
} = require("../controllers/nextReunionController");

router.get("/", getNextReunions); 

// router.get("/", getNextReunion); //nextReunion and Map

// router.post("/", createNextReunion)

router.post("/map/:year", addNextReunionMap);

router.post("/directions", getNextReunionDirections);

router.patch('/:id', editNextReunion)

router.delete("/:id", deleteNextReunion)

module.exports = router;
