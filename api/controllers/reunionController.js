const { Reunion, ReunionPhoto } = require("../models/model");

const getReunions = async (req, res, next) => {
  if (!req.member) {
    next();
    return;
  }

  try {
    await Reunion.find({})
      .sort({ createdAt: -1 })
      .populate("year")
      .populate("reunionPhotos")
      .then((reunions) => {
        res.status(200).json({ reunions });
      });
  } catch (err) {
    res.status(500).json({
      err: "An unexpected error has occurred",
    });
  }
};

const getReunion = async (req, res, next) => {
  if (!req.member) {
    next();
    return;
  }

  const reunion = await Reunion.findOne({ year: req.params.year })
    .populate("year")
    .populate("reunionPhotos")
    .sort({ createdAt: -1 });

  if (!reunion) {
    return res.status(404).json({ 
      err: "There are no images to display for this reunion" 
    });
  }

  res.status(200).json(reunion);

  if (reunion.photos) {
    alert("No photos have been added for this reunion");
  }
};

const archiveReunion = async (req, res, next) => {
  console.log("archive reunion", req.reunion);

  if (!req.member) {
    next();
    return;
  }

  const { year, description, cover_image_url } = req.body;

  try {
    const completedReunion = await Reunion.create({
      year,
      description,
      cover_image_url,
    });

    await completedReunion.save();

    res.status(200).json(completedReunion);
  } catch (error) {
    res.status(500).json({
      err: "Unable to complete request",
    });
  }
};

const addReunionPhotos = async (req, res, next) => {
  
  if (!req.member) {
    next();
    return;
  }

  const { image_url, description } = req.body;

  const newReunionPhoto = new ReunionPhoto({
    image_url,
    description,
    reunion: req.params.year,
  });

  newReunionPhoto.save();

  let reunionYear = new Reunion();
  reunionYear = req.params.year;
  console.log(reunionYear);

  const reunionToUpdate = await Reunion.findOneAndUpdate(
    { year: reunionYear },
    { $push: { reunionPhotos: newReunionPhoto} },
    { new: true }
  );

  console.log(reunionToUpdate.reunionPhotos);

  res.status(200).json(newReunionPhoto);
};

const updateReunion = async (req, res, next) => {
 
  if (!req.member) {
    next();
    return;
  }

  try {
    const reunionToUpdate = await Reunion.findOneAndUpdate(
      { year: req.params.year },
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "Reunion updated!",
      reunionToUpdate,
    });
  } catch (err) {
    res.status(500).json({
      err: "Unable to complete request",
    });
  }
};

module.exports = {
  getReunions,
  getReunion,
  archiveReunion,
  addReunionPhotos,
  updateReunion,
};
