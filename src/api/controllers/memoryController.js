const { Memory, Member, Comment } = require("../models/model");

const getMemories = async (req, res, next) => {
  console.log("get memories", req.member);

  if (!req.member) {
    next();
    return;
  }

  try {
    await Memory.find({})
      .sort({ createdAt: -1 })
      .populate("member", "nameAtGraduation")
      .populate("comments", "text")
      .then((memories) => {
        res.status(200).json({ memories });
      });
  } catch (err) {
    res.status(500).json({
      err: "An unexpected error has occurred",
    });
  }
};

const getMemory = async (req, res, next) => {
  console.log("get memory", req.member);

  if (!req.member) {
    next();
    return;
  }

  const { id } = req.params;

  try {
    const memory = await Memory.findById({ _id: id })
      .sort({ createdAt: -1 })
      .populate("member", "nameAtGraduation")
      .populate("comments", "text");

    if (!memory) {
      return res.status(404).json({
        err: "Memory does not exist in database",
      });
    }

    res.status(200).json(memory);
  } catch (err) {
    res.status(500).json({
      err: "An unexpected error has occurred",
    });
  }
};

const getMemberByMemoryId = async (req, res, next) => {
  console.log("get member by memory id", req.params);

  if (!req.member) {
    next();
    return;
  }

  const { id } = req.params;

  try {
    const selectedMemory = await Memory.findById({ _id: id });
    const member = selectedMemory.member;

    res.status(200).json(member);
  } catch (err) {
    res.status(500).json({
      err: "An unexpected error has occurred",
    });
  }
};

const getCommentsByMemoryId = async (req, res, next) => {
  console.log("get comments by memory id", req.params);

  if (!req.member) {
    next();
    return;
  }

  const { id } = req.params;

  try {
    const selectedMemory = await Memory.findById({ _id: id });
    const comments = selectedMemory.comments;

    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({
      err: "An unexpected error has occurred",
    });
  }
};

const createMemory = async (req, res, next) => {
  console.log("create memory", req.member);

  if (!req.member) {
    next();
    return;
  }

  const { image_url, subject, text } = req.body;

  try {
    const newMemory = await Memory.create({
      image_url,
      member: req.member.memberId,
      subject,
      text,
    });

    newMemory.save();

    const newMemoryId = newMemory._id;
    const memberId = req.member.memberId;

    const memberToUpdate = await Member.findById(memberId);

    memberToUpdate.memories.push(newMemoryId);
    memberToUpdate.save();
    res.status(200).json(newMemory);
  } catch (error) {
    res.status(500).json({
      err: "Unable to complete request",
    });
  }
};

const createComment = async (req, res, next) => {
  console.log("create comment", req.member);

  if (!req.member) {
    next();
    return;
  }
  
  const { text } = req.body;
    
  
    const newComment = await Comment.create({
      memory: req.params.id,
      member: req.member.memberId,
      text

    });

    await newComment.save();
    const memoryId = req.params.id;
    
    

    const memoryToUpdate = await Memory.findById(memoryId);

    memoryToUpdate.comments.push(newComment);
    await memoryToUpdate.save();
    
    res.status(200).json(newComment);
  // } catch (error) {
  //   res.status(500).json({
  //     err: "Unable to complete request",
  //   });
  }


const deleteMemory = async (req, res, next) => {
  console.log("delete memory", req.member);

  if (!req.member) {
    next();
    return;
  }

  const { id } = req.params;

  try {
    const memory = await Memory.findOne({ _id: id });
    console.log(memory);

    if (!memory) {
      return res.status(404).json({
        err: "Memory does not exist in database",
      });
    }

    const member = memory.member.toString();
    console.log("memory.member", member);
    console.log("req.member.memberid", req.member.memberId);

    const deletedMemory = await Memory.deleteOne(memory);

    console.log(deletedMemory);

    const memberId = req.member.memberId;
    console.log(memberId);

    const memberToUpdate = await Member.findById(memberId);
    console.log(memberToUpdate);

    const index = memberToUpdate.memories.findIndex(
      (mem) => mem.toString() === id
    );
    console.log(index);

    if (index !== -1) {
      memberToUpdate.memories.splice(index, 1);
    }

    await memberToUpdate.save();

    console.log(memberToUpdate.memories);

    res.status(200).json({
      message: "Memory has been deleted from database",
      deletedMemory,
    });
  } catch (err) {
    res.status(500).json({
      err: "Unable to complete request",
    });
  }
};

const updateMemory = async (req, res, next) => {
  console.log("update memory", req.member);

  if (!req.member) {
    next();
    return;
  }

  const { id } = req.params;

  try {
    const memory = await Memory.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    res.status(200).json({
      message: "Memory updated!",
      memory,
    });
  } catch (err) {
    res.status(500).json({
      err: "Unable to complete request",
    });
  }
};

module.exports = {
  getMemories,
  getMemory,
  getMemberByMemoryId,
  getCommentsByMemoryId,
  createMemory,
  createComment,
  deleteMemory,
  updateMemory,
};
