//FOR FUTURE USE 

// const { Registration } = require("../models/model");

// const getRegistrations = async (req, res, next) => {
//   console.log("get registrations", req.member);

//   if (!req.member) {
//     next();
//     return;
//   }

//   try {
//     await Registration.find({})
//       .sort({ createdAt: -1 })
//       .then((registrations) => {
//         res.status(200).json({ registrations });
//       });
//   } catch (err) {
//     res.status(500).json({
//       err: "An unexpected error has occurred",
//     });
//   }
// };

// const getRegistration = async (req, res, next) => {
//   console.log("get registration", req.member);

//   if (!req.member) {
//     next();
//     return;
//   }

//   const { id } = req.params;

//   try {
//     const registration = await Registration.findById({ _id: id }).sort({
//       createdAt: -1,
//     });

//     if (!registration) {
//       return res.status(404).json({
//         err: "Registration does not exist in database",
//       });
//     }

//     res.status(200).json(registration);
//   } catch (err) {
//     res.status(500).json({
//       err: "An unexpected error has occurred",
//     });
//   }
// };

// const createNewRegistration = async (req, res, next) => {
//   console.log("create new registration", req.member);

//   if (!req.member) {
//     next();
//     return;
//   }

//   const { name, email, numberAttending, cost } = req.body;

//   try {
//     const newRegistration = await Registration.create({
//       name,
//       email,
//       numberAttending,
//       cost,
//     });

//     newRegistration.save();

//     res.status(200).json(newRegistration);
//   } catch (error) {
//     res.status(500).json({
//       err: "Unable to complete request",
//     });
//   }
// };

// const deletedRegistration = async (req, res, next) => {
//   console.log("delete registration", req.member);

//   if (!req.member) {
//     next();
//     return;
//   }

//   const { id } = req.params;

//   try {
//     const deletedRegistration = await Registration.deleteOne(
//       deletedRegistration
//     );

//     console.log(deletedRegistration);

//     res.status(200).json({
//       message: "Registration has been deleted from database",
//       deletedRegistration,
//     });
//   } catch (err) {
//     res.status(500).json({
//       err: "Unable to complete request",
//     });
//   }
// };

// const updatedRegistration = async (req, res, next) => {
//   console.log("updated registration", req.member);

//   if (!req.member) {
//     next();
//     return;
//   }

//   const { id } = req.params;

//   try {
//     const registration = await Registration.findOneAndUpdate(
//       { _id: id },
//       req.body,
//       {
//         new: true,
//       }
//     );

//     res.status(200).json({
//       message: "Registration updated!",
//       registration,
//     });
//   } catch (err) {
//     res.status(500).json({
//       err: "Unable to complete request",
//     });
//   }
// };

// module.exports = {
//   getRegistrations,
//   getRegistration,
//   createNewRegistration,
//   deletedRegistration,
//   updatedRegistration,
// };
