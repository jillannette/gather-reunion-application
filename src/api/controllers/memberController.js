const { Member } = require("../models/model");

const getMembers = async (req, res, next) => {
  console.log("get members", req.member);

  if (!req.member) {
    next();
    return;
  }

  try {
    const members = await Member.find({}).sort({ createdAt: -1 });

    res.status(200).json(members);
  } catch (err) {
    res.status(500).json({
      err: "An unexpected error has occurred",
    });
  }
};

const getMember = async (req, res, next) => {
  console.log("get member", req.member);

  if (!req.member) {
    next();
    return;
  }

  const { id } = req.params;

  try {
    const member = await Member.findById({ _id: id })
      .sort({ createdAt: -1 })
      .populate('member', '._id')
      .populate("memories", "text")
      .populate("comments", "text")
      .populate("bio");

    if (!member) {
      return res.status(404).json({
        err: "Member does not exist in database",
      });
    }

    res.status(200).json(member);
  } catch (err) {
    res.status(500).json({
      err: "An unexpected error has occurred",
    });
  }
};

const deleteMember = async (req, res, next) => {
  console.log("delete member", req.member);

  if (!req.member) {
    next();
    return;
  }

  const { id } = req.params;

  try {
    const member = await Member.findOneAndDelete({ _id: id });

    if (!member) {
      return res.status(404).json({
        err: "Member does not exist in database",
      });
    }

    res.status(200).json({
      message: "Member has been deleted from database",
      member,
    });
  } catch (err) {
    res.status(500).json({
      err: "An unexpected error has occurred",
    });
  }
};

const updateMember = async (req, res, next) => {
  console.log("update member", req.member);

  if (!req.member) {
    next();
    return;
  }

  const { id } = req.params;

  try {
    const member = await Member.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    res.status(200).json({
      message: "Member updated!",
      member,
    });

    if (!member) {
      return res.status(404).json({
        err: "Member does not exist in database",
      });
    }
  } catch (err) {
    res.status(500).json({
      err: "An unexpected error has occurred",
    });
  }
};

module.exports = {
  getMembers,
  getMember,
  deleteMember,
  updateMember,
};
