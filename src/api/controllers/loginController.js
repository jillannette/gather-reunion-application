const {Member} = require('../models/Model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');


const login = (req, res) => {
  console.log('you are here')

   // check if email exists
  Member.findOne({ email: req.body.email })
 

    // if email exists
    .then((member) => {
      
      // compare the password entered and the hashed password found
      bcrypt
        .compare(req.body.password, member.password)

        // if the passwords match
        .then((passwordCheck) => {

          // check if password matches
          if(!passwordCheck) {
            return res.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }
         
          //   create JWT token
          const token = jwt.sign(
            {
              memberId: member._id,
              memberEmail: member.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          //   return success response
          res.status(200).send({
            message: "Login Successful",
            email: member.email,
            token,
          });
        })
        // catch error if password does not match
        .catch((error) => {
          res.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      res.status(404).send({
        message: "Email not found",
        e,
      });
    });
};








module.exports = {
  login
  
}
