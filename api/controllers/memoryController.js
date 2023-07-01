const { Memory, Member } = require("../models/model");

const getMemories = async (req, res, next) => {
  console.log("get memories", req.member);

  if (!req.member) {
    next();
    return;
  }

  try {
    const memories = await Memory.find({})
      .sort({ createdAt: -1 })
      .populate("member", "nameAtGraduation")
      .populate("comments", "nameAtGraduation")
      .populate("comments", "text")
      res.status(200).json({ memories });
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
      .populate("comments", "text")
      .populate("comments", "namAtGraduation")

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

    res.status(200).json({member});
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

  if (!req.member) {
    next();
    return;
  }

  try {
  const { memoryId, memberName, text } = req.body;

    const memory = await Memory.findById(memoryId);
    if (!memory) {
      return res.status(404).json({ error: 'Memory not found' });
    }

    const newComment = {
      memberName,
      text
    };

    memory.comments.push(newComment);
    await memory.save();

    return res.status(201).json({ message: 'Comment created successfully' });
  } catch (error) {
    console.error('Error creating comment:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

    const getComments = async (req, res, next) => {

  if (!req.member) {
    next();
    return;
  }

  try {
    const { memoryId } = req.params;

    const memory = await Memory.findById(memoryId);
    if (!memory) {
      return res.status(404).json({ error: 'Memory not found' });
    }

    return res.json({ comments: memory.comments });
  } catch (error) {
    console.error('Error getting comments:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
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
