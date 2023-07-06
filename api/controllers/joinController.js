const { Member } = require("../models/model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const join = async (req, res) => {
  console.log("join route", req.body);
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.count();
    const member = await Member.create({
      email: req.body.email,
      password: hashedPassword,
      nameAtGraduation: req.body.nameAtGraduation,
      currentName: req.body.currentName,
      residesIn: req.body.residesIn,
      image_url: req.body.image_url,
      bio: req.body.bio,
    });
    console.log("new member", member);

    const token = jwt.sign(
      {
        memberId: member._id,
        memberEmail: member.email,
      },
      "RANDOM-TOKEN",
      { expiresIn: "48h" }
    );

    console.log("token", token);

    res.status(200).json({
      message: "Member account created",
      token,
      member,
    });
  } catch (error) {
    res.status(500).json({
      error: "Unable to create account - make sure to input all fields",
      err: error,
    });
  }
};

module.exports = {
  join,
};
