const express = require("express");
const router = express.Router();

const {
  getMaps,
  getMap,
  createMap,
  editMap,
  deleteMap,
} = require("../controllers/mapController");

router.get("/", getMaps) 

router.get("/:id", getMap)

router.post("/", createMap)

router.patch('/:id', editMap)

router.delete("/:id", deleteMap)

module.exports = router;
