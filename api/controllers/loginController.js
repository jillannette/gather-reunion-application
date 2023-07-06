const { Member } = require("../models/model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
  Member.findOne({ email: req.body.email })

    .then((member) => {
      bcrypt
        .compare(req.body.password, member.password)
        .then((passwordCheck) => {
          if (!passwordCheck) {
            return res.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }

          const token = jwt.sign(
            {
              memberId: member._id,
              memberEmail: member.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "48h" }
          );

          res.status(200).send({
            member,
            token,
          });
        })
        .catch((error) => {
          res.status(400).send({
            alert: "Passwords does not match",
            error,
          });
        });
    })
    .catch((e) => {
      res.status(404).send({
        message: "Email not found",
        e,
      });
    });
};

module.exports = {
  login,
};
