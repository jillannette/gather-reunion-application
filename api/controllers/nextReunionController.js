const { NextReunion } = require("../models/model");

const getNextReunions = async (req, res, next) => {
  console.log("get nextReunions", req.member);

  if (!req.member) {
    next();
    return;
  }

  try {
    const nextReunions = await NextReunion.find({}).sort({ createdAt: -1 });
    res.status(200).json({ nextReunions });
  } catch (err) {
    res.status(500).json({
      err: "An unexpected error has occurred",
    });
  }
};

const getNextReunion = async (req, res, next) => {
  if (!req.member) {
    next();
    return;
  }

  const { id } = req.params;

  try {
    const nextReunion = await NextReunion.findById({ _id: id });

    if (!nextReunion) {
      return res.status(404).json({ err: "Next Reunion does not exist " });
    }

    res.status(200).json(nextReunion);
  } catch (err) {
    res.status(500).json({
      err: "An unexpected error has occurred",
    });
  }
};

const createNextReunion = async (req, res, next) => {
  if (!req.member) {
    next();
    return;
  }

  const { cover_image_url, date, location, map, description, registration } =
    req.body;

  try {
    const nextReunion = await UpcomingReunion.create({
      cover_image_url,
      date,
      location,
      map,
      description,
      registration,
    });

    await nextReunion.save();

    res.status(200).json(nextReunion);
  } catch (error) {
    res.status(500).json({
      err: "Unable to complete request",
    });
  }
};

const editNextReunion = async (req, res, next) => {
  if (!req.member) {
    next();
    return;
  }

  try {
    const editedReunion = await NextReunion.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "Next Reunion updated!",
      editedReunion,
    });
  } catch (err) {
    res.status(500).json({
      err: "Unable to complete request",
    });
  }
};

const deleteNextReunion = async (req, res, next) => {
  console.log("delete NextReunion", req.member);

  if (!req.member) {
    next();
    return;
  }

  const { id } = req.params;

  try {
    const deletedNextReunion = await NextReunion.findOneAndDelete({ _id: id });

    res.status(200).json({
      message: "Upcoming reunion has been deleted from database",
      deletedNextReunion,
    });
  } catch (err) {
    res.status(500).json({
      err: "An unexpected error has occurred",
    });
  }
};

module.exports = {
  getNextReunions,
  getNextReunion,
  createNextReunion,
  editNextReunion,
  deleteNextReunion,
};
