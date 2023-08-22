const { NextReunion, Map } = require("../models/model");
const axios = require('axios');

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
  console.log('getNextReunionRoute', req.member)
  if (!req.member) {
    next();
    return;
  }

  const nextReunion = await NextReunion.find({ })
    .populate("year")
    .populate("maps")
    .sort({ createdAt: -1 });
    console.log('getnextreunion', nextReunion)

  if (!nextReunion) {
    return res.status(404).json({ 
      err: "Next Reunion has not been added" 
    });
  }

  res.status(200).json(nextReunion[0]);

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

  const { center } = req.body;

  const newMap = new Map({
    center: Number(center),
    zoom: Number(16), 
    containerStyle: {
      height: "80vh",
      width: "100%"
    },
    reunion: req.params.year,
    startingPoint: {}
  });

  newMap.save();

  let nextReunionYear = new NextReunion();
  nextReunionYear = req.params.year;
 
  const nextReunionToUpdate = await NextReunion.findOneAndUpdate(
    { year: nextReunionYear },
    { $push: { maps: newMap} },
    { new: true }
  );

  console.log(nextReunionToUpdate.maps);

  res.status(200).json(newMap);
};

///////
const getNextReunionDirections = async (req, res, next) => {
  console.log("get directions", req.member);
  
  if (!req.member) {
    next();
    return;
  };

  const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
  console.log('apiKey', API_KEY)
  const { startingPoint } = req.body;  
  console.log('startingPoint', startingPoint)
  const mapArray = await Map.find({});
  console.log('mapArray', mapArray)
  const center = mapArray[0].center
  console.log('center', center);
  

  
  let GOOGLE_URL = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(startingPoint)}&destination=${center.lat},${center.lng}&key=${API_KEY}`

  const directions = await axios.get(GOOGLE_URL)
    console.log('directions', directions.data)
    res.json(directions.data)
      
    }
   

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
  getNextReunionDirections,
  editNextReunion,
  deleteNextReunion,
};
