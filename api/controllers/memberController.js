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
  } catch (error) {
    res.status(500).json({
      error: "An unexpected error has occurred",
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
    const member = await Member.findById({ _id: id });
    console.log(member);

    res.status(200).json({ member });
  } catch (error) {
    res.status(500).json({
      error: { message: "Unable to retrieve member from database" },
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
  } catch (error) {
    res.status(500).json({
      error: "An unexpected error has occurred",
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
        error: "Member does not exist in database",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "An unexpected error has occurred",
    });
  }
};

module.exports = {
  getMembers,
  getMember,
  deleteMember,
  updateMember,
};
