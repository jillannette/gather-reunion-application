const { NextReunion } = require("../models/model");

const getNextReunion = async (req, res, next) => {
  

  if (!req.member) {
    next();
    return;
  }

  const { id } = req.params;

  try {
    const selectedReunion = await NextReunion.findById({ _id: id })
 

 

    res.status(200).json(selectedReunion);
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

  const { cover_image_url, date, location, map, description, registration } = req.body;  

  try {
    const nextReunion = await UpcomingReunion.create({
      cover_image_url,
      date, 
      location, 
      map,
      description, 
      registration 
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
  getNextReunion,
  createNextReunion,
  editNextReunion,
  deleteNextReunion
};