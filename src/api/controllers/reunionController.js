const { Reunion, ReunionPhoto } = require("../models/model");

const getReunions = async (req, res, next) => {
  if (!req.member) {
    next();
    return;
  }

  try {
    await Reunion.find({})
      .sort({ createdAt: -1 })
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

  try {
    const reunion = await Reunion.findOne({ year: req.params.year })
      .populate("year")
      .populate("images");

    if (!reunion) {
      return res
        .status(404)
        .json({ err: "There are no images to display for this reunion" });
    }

    res.status(200).json(reunion);
  } catch (err) {
    res.status(500).json({ err: "Unable to complete request" });
  }
};

const createReunion = async (req, res, next) => {
  console.log("create reunion", req.reunion);

  if (!req.member) {
    next();
    return;
  }

  const { year, description, cover_image_url, images } = req.body;

  try {
    const newReunion = await Reunion.create({
      year,
      description,
      cover_image_url,
      images,
    });

    await newReunion.save();

    res.status(200).json(newReunion);
  } catch (error) {
    res.status(500).json({
      err: "Unable to complete request",
    });
  }
};

const addReunionPhotos = async (req, res, next) => {
  console.log("createReunionPhotos", req.addReunionPhotos);

  if (!req.member) {
    next();
    return;
  }

  const { image_url, description } = req.body;

  try {
    const newReunionPhoto = await ReunionPhoto.create({
      image_url,
      description,
    });

    newReunionPhoto.save();

    const newReunionPhotoId = newReunionPhoto._id;
    const reunionYear = req.reunion.year;

    const reunionToUpdate = await Reunion.findByYear(reunionYear);

    reunionToUpdate.images.push(newReunionPhotoId);
    reunionToUpdate.save();
    res.status(200).json(newReunionPhoto);
  } catch (error) {
    res.status(500).json({
      err: "Unable to complete request",
    });
  }
};

const updateReunion = async (req, res, next) => {
  console.log("update reunion", req.member);

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
  createReunion,
  addReunionPhotos,
  updateReunion,
};
