const { Comment, Memory } = require("../models/model");

const getComments = async (req, res, next) => {
  console.log("get comments", req.member);

  if (!req.member) {
    next();
    return;
  }

  try {
    const comments = await Comment.find({})
      .sort({ createdAt: -1 })
      .populate("member", "currentName")
      .populate("memory");

    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ err: "Unable to complete request" });
  }
};

const getComment = async (req, res, next) => {
  console.log("get comment", req.member);

  if (!req.member) {
    next();
    return;
  }

  const { id } = req.params;

  try {
    const comment = await Comment.findById({ _id: id });

    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json({ err: "Unable to complete request" });
  }
};

const getMemberByCommentId = async (req, res, next) => {
  console.log("get member by comment id", req.member);

  if (!req.member) {
    next();
    return;
  }

  const { id } = req.params;

  try {
    const selectedComment = await Comment.findById({ _id: id });
    console.log(selectedComment);

    const member = selectedComment.member;

    console.log(member);
    res.status(200).json(member);
    console.log(member);
  } catch (err) {
    res.status(500).json({ err: "sample error msg" });
  }
};

const deleteComment = async (req, res, next) => {
  console.log("delete comment", req.member);

  if (!req.member) {
    next();
    return;
  }

  const { id } = req.params;

  try {
    const comment = await Comment.findOneAndDelete({ _id: id });

    if (!comment) {
      return res.status(404).json({
        err: "Comment does not exist in database",
      });
    }
    res.status(200).json({
      message: "Comment has been deleted from database",
      comment,
    });
  } catch (err) {
    res.status(500).json({
      err: "Unable to complete request",
    });
  }
};

const updateComment = async (req, res, next) => {
  console.log("update comment", req.member);

  if (!req.member) {
    next();
    return;
  }

  const { id } = req.params;

  try {
    const comment = await Comment.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    res.status(200).json({ message: "Comment updated!", comment });
  } catch (err) {
    res.status(500).json({ err: "Unable to complete request" });
  }
};

module.exports = {
  getComments,
  getComment,
  getMemberByCommentId,
  deleteComment,
  updateComment,
};
