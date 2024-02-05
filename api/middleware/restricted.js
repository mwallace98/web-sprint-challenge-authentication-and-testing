const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  if(req.session.user){
    next()
  }else {
    next({message: "token required"})
  } 
  /*
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */
};
