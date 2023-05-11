const jwt = require('jsonwebtoken');

//THIS WORKS!  5-11
const memberAccess = async  (req, res, next) => {

  try {
    //   get the token from the authorization header
    const token = await req.headers.authorization.split(" ")[1];
    console.log(token)  //ok

    //check if the token matches the supposed origin
    const decodedToken = await jwt.verify(token, "RANDOM-TOKEN");
    console.log(decodedToken)  //ok

    // retrieve the user details of the logged in user
    const member = await decodedToken;

    // pass the user down to the endpoints here
    req.member = member;
    console.log(req.member) //ok

    // pass down functionality to the endpoint
    next();

    res.json({
      message: 'You may now access all app features'
    })
    
  } catch (error) {
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};

//THIS WORKS!  5-11
const restrictedAccess = (req, res) => {
  res.json({
    message: 'You must be a member to view most features of this app. Signup to become a member!'
  })
}

module.exports = {
  memberAccess,
  restrictedAccess
}

