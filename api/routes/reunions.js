const express = require("express");
const router = express.Router();

const {
  getReunions,
  getReunion,
  archiveReunion,
  addReunionPhotos,
  updateReunion,
} = require("../controllers/reunionController");

router.get("/", getReunions);

router.get("/:year", getReunion); //reunionPhotos

router.post("/", archiveReunion);

router.post("/:year", addReunionPhotos);

router.patch("/:year", updateReunion);

module.exports = router;
