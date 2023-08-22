const jwt = require("jsonwebtoken");

const memberAccess = async (req, res, next) => {
  try {
    const token = await req.headers.authorization?.split(" ")[1]; //if, split on space
    console.log("memberAccess", token); //ok

    jwt.verify(token, "RANDOM-TOKEN", (err, decodedToken) => {
      if (err) {
        req.member = null;
      } else {
        // console.log("decodedToken", decodedToken); //ok

        const member = decodedToken;

        req.member = member;
        // console.log(req.member); //ok
      }

      next();
    });
  } catch (error) {
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};

const restrictedAccess = (req, res) => {
  res.json({
    message: "Access denied - You must be a member to use this app",
  });
};

module.exports = {
  memberAccess,
  restrictedAccess,
};
