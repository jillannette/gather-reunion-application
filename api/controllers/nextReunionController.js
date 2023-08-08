const { NextReunion, Map } = require("../models/model");

const getNextReunions = async (req, res, next) => {
  if (!req.member) {
    next();
    return;
  }

  try {
    await NextReunion.find({})
      .sort({ createdAt: -1 })
      .populate("year")
      .populate("maps")
      .then((nextReunions) => {
        res.status(200).json({ nextReunions });
      });
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

  const nextReunion = await NextReunion.findOne({ year: req.params.year })
    .populate("year")
    .populate("maps")
    .sort({ createdAt: -1 });

  if (!nextReunion) {
    return res.status(404).json({ 
      err: "Next Reunion has not been added" 
    });
  }

  res.status(200).json(nextReunion);

  if (reunion.maps) {
    alert("No maps have been added for this reunion");
  }
};


const createNextReunion = async (req, res, next) => {
  console.log('create nextReunion', req.nextReunion)

  if (!req.member) {
    next();
    return;
  }

  const { year, cover_image_url, date, location, maps, description } =
    req.body;

  
    const newNextReunion = await NextReunion.create({
      year,
      cover_image_url,
      date,
      location,
      maps,
      description,
    });

    await newNextReunion.save();

    res.status(200).json(newNextReunion);
  // } catch (error) {
  //   res.status(500).json({
  //     err: "Unable to complete request",
  //   });
  // }
};

const addNextReunionMap = async (req, res, next) => {
  
  if (!req.member) {
    next();
    return;
  }

  const { center, zoom, containerStyle } = req.body;

  const newMap = new Map({
    center, 
    zoom, 
    containerStyle,
    reunion: req.params.year,
  });

  newMap.save();

  let nextReunionYear = new NextReunion();
  nextReunionYear = req.params.year;
 
  const nextReunionToUpdate = await NextReunion.findOneAndUpdate(
    { year: reunionYear },
    { $push: { maps: newMap} },
    { new: true }
  );

  console.log(nextReunionToUpdate.maps);

  res.status(200).json(newMap);
};

const editNextReunion = async (req, res, next) => {
  if (!req.member) {
    next();
    return;
  }

  try {
    const editedReunion = await NextReunion.findOneAndUpdate(
      { year: req.params.year },
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
  
  if (!req.member) {
    next();
    return;
  }

  let nextReunionYear = new NextReunion();
  nextReunionYear = req.params.year;
  console.log(nextReunionYear);

  try {
    const deletedNextReunion = await NextReunion.findOneAndDelete({ year: nextReunionYear });

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
  addNextReunionMap,
  editNextReunion,
  deleteNextReunion,
};
