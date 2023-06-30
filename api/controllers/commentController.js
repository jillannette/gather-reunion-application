const { Comment, Memory, Member } = require("../models/model");

// const getComments = async (req, res, next) => {
//   console.log("get comments", req.member);

//   if (!req.member) {
//     next();
//     return;
//   }

//   try {
//     const comments = await Comment.find({})
//       .sort({ createdAt: -1 })
//       .populate("member", "nameAtGraduation")
//       .populate("memory");

//     res.status(200).json(comments);
//   } catch (err) {
//     res.status(500).json({ err: "Unable to complete request" });
//   }
// };

// const getComment = async (req, res, next) => {
//   console.log("get comment", req.member);

//   if (!req.member) {
//     next();
//     return;
//   }

//   const { id } = req.params;

//   try {
//     const comment = await Comment.findById({ _id: id });

//     if (!comment) {
//       return res.status(404).json({ error: "Comment not found" });
//     }

//     res.status(200).json(comment);
//   } catch (err) {
//     res.status(500).json({ err: "Unable to complete request" });
//   }
// };

// const getMemberByCommentId = async (req, res, next) => {
//   console.log("get member by comment id", req.member);

//   if (!req.member) {
//     next();
//     return;
//   }

//   const { id } = req.params;

//   try {
//     const selectedComment = await Comment.findById({ _id: id });
//     console.log(selectedComment);

//     const member = selectedComment.member;

//     console.log(member);
//     res.status(200).json(member);
//     console.log(member);
//   } catch (err) {
//     res.status(500).json({ err: "sample error msg" });
//   }
// };

const createComment = async (req, res, next) => {
  console.log("create comment", req.member);

  if (!req.member) {
    next();
    return;
  }

  const { text, memberName } = req.body;
  

  try {
    const newComment = await Comment.create({
      memory: req.params.memoryId,
      text,
    });

    newComment.save();

    const newCommentId = newComment._id;
    const memoryId = req.params.memoryId;

    const memoryToUpdate = await Memory.findById(memoryId);

    memoryToUpdate.comments.push(newCommentId);
    memoryToUpdate.save();
    res.status(200).json(newComment);
  } catch (error) {
    res.status(500).json({
      err: "Unable to complete request",
    });
  }
};
  
  
  module.exports = { createComment };
//   const { memoryId } = req.params;
    
  
  
//   try {
//     const {memberId, text } = req.body;
//     const loggedInMemberId = req.member.member._id

//     const memory = await Memory.findById(memoryId)

//     const newComment = await Memory.Comment.create({
//       memory: memory,
//       nameAtGraduation: nameAtGraduation,
//       text

//     });

//   }
  
    
    
    
//     const memoryToUpdate = await Memory.findByIdAndUpdate(req.params.memoryId, {
//       $push:{comments:newComment._id}
//     });

//     res.status(200).json(newComment);
//   } 


// // const deleteComment = async (req, res, next) => {
// //   console.log("delete comment", req.member);

// //   if (!req.member) {
// //     next();
// //     return;
// //   }

// //   const { id } = req.params;

// //   try {
// //     const comment = await Comment.findOneAndDelete({ _id: id });

// //     if (!comment) {
// //       return res.status(404).json({
// //         err: "Comment does not exist in database",
// //       });
// //     }
// //     res.status(200).json({
// //       message: "Comment has been deleted from database",
// //       comment,
// //     });
// //   } catch (err) {
// //     res.status(500).json({
// //       err: "Unable to complete request",
// //     });
// //   }
// // };

// // const updateComment = async (req, res, next) => {
// //   console.log("update comment", req.member);

// //   if (!req.member) {
// //     next();
// //     return;
// //   }

// //   const { id } = req.params;

// //   try {
// //     const comment = await Comment.findOneAndUpdate({ _id: id }, req.body, {
// //       new: true,
// //     });

// //     res.status(200).json({ message: "Comment updated!", comment });
// //   } catch (err) {
// //     res.status(500).json({ err: "Unable to complete request" });
// //   }
// // };

// module.exports = {
//   // getComments,
//   // getComment,
//   // getMemberByCommentId,
//   createComment,
//   // deleteComment,
//   // updateComment,
// };
