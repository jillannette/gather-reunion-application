// const { Bio, Member } = require("../models/model");
// const mongoose = require("mongoose");

// //THIS WORKS
// const getBio = async (req, res, next) => {
//   console.log("get bio", req.member);

//   if (!req.member) {
//     next();
//     return;
//   }

//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res
//       .status(404)
//       .json({ err: "The ID used to locate the resource is not valid" });
//   }

//   try {
//     const bio = await Bio.findById({ _id: id }).sort({ createdAt: -1 });

//     if (!bio) {
//       return res.status(404).json({ err: "Bio does not exist in database" });
//     }

//     res.status(200).json(bio);
//   } catch (err) {
//     res.status(500).json({ err: "Unable to complete request" });
//   }
// };

// //THIS WORKS 5-5-23

// const deleteBio = async (req, res, next) => {
//   console.log("delete bio", req.member);

//   if (!req.member) {
//     next();
//     return;
//   }

//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res
//       .status(400)
//       .json({ err: "The ID used to locate the resource is not valid" });
//   }

//   try {
//     const bio = await Bio.findOneAndDelete({ _id: id }).populate("member");
//     console.log("bio.member", bio.member);

//     if (!bio) {
//       return res.status(404).json({
//         err: "Bio does not exist in database",
//       });
//     }

    

//     res.status(200).json({
//       message: "Bio has been deleted from database",
//       bio,
//     });
//   } catch (err) {
//     res.status(500).json({
//       err: "Unable to complete request",
//     });
//   }
// };

// //THIS WORKS 5-5-23
// const updateBio = async (req, res, next) => {
//   console.log("update bio", req.member);

//   if (!req.member) {
//     next();
//     return;
//   }

//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res
//       .status(404)
//       .json({ err: "The ID used to locate the resource is not valid" });
//   }
//   try {
//     const bio = await Bio.findOneAndUpdate({ _id: id }, req.body, {
//       new: true,
//     });

//     res.status(200).json({ message: "Bio updated!", bio });
//   } catch (err) {
//     res.status(500).json({ err: "Unable to complete request" });
//   }
// };

// module.exports = {
//   getBio,
//   deleteBio,
//   updateBio,
// };
