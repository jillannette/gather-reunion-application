const {Member} = require('../models/Model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const join = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const member = new Member({
      email: req.body.email,
      password: hashedPassword,
      nameAtGraduation: req.body.nameAtGraduation,
      currentName: req.body.currentName,
      image_url: req.body.image_url,
      bio: req.body.bio,
    });

    await member.save();

    const token = jwt.sign(
      {
        memberId: member._id,
        memberEmail: member.email,
      },
      "RANDOM-TOKEN",
      { expiresIn: "24h" }
    );

    res.status(200).json({
      message: 'Member account created',
      token,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Unable to create new member account',
      err: error,
    });
  }
};

module.exports = {
  join,
};