const jwt = require('jsonwebtoken');

//THIS WORKS!  5-11
const memberAccess = async  (req, res, next) => {

  try {
    console.log('memberAccess', req.headers)
    //   get the token from the authorization header
    const token = await req.headers.authorization?.split(" ")[1];
    console.log('memberAccess', token)  //ok

    //check if the token matches the supposed origin
    jwt.verify(token, "RANDOM-TOKEN", (err, decodedToken) => {

      if (err) {
        req.member = null;
      } else {

        console.log('decodedToken', decodedToken)  //ok
    
        // retrieve the user details of the logged in user
        const member = decodedToken;
    
        // pass the user down to the endpoints here
        req.member = member;
        console.log(req.member) //ok
      }
  
      // pass down functionality to the endpoint
      next();
    });

  
  } catch (error) {
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};

//THIS WORKS!  5-11
const restrictedAccess = (req, res) => {
  console.log('rest access')
  res.json({
    message: 'You must be a member to view most features of this app. Signup to become a member!'
  })
}

module.exports = {
  memberAccess,
  restrictedAccess
}

