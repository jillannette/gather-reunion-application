const jwt = require("jsonwebtoken");

const memberAccess = async (req, res, next) => {
  try {
    console.log("memberAccess", req.headers);
    const token = await req.headers.authorization?.split(" ")[1];
    console.log("memberAccess", token);

    jwt.verify(token, "RANDOM-TOKEN", (err, decodedToken) => {
      if (err) {
        req.member = null;
      } else {
        console.log("decodedToken", decodedToken);

        const member = decodedToken;

        req.member = member;
        console.log(req.member);
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
    message:
      "Access denied!  You must be a member to use this app, and once logged in can only make changes to your own profile.",
  });
};

module.exports = {
  memberAccess,
  restrictedAccess,
};
