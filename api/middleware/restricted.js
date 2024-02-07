const jwt = require('jsonwebtoken')

function generateToken(user){
  const payload = {
    userId: user.id,
    username: user.username
  }
  const secret = 'secret';
  const options = {
    expiresIn: '1d'
  }
  return jwt.sign(payload,secret,options)
}

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if(!token){
    return res.status(401).json({message: 'Token required'})
  }

  jwt.verify(token,'secret', (err,decodedToken) => {
    if(err){
      return res.status(401).json({message: 'token invalid'})    
    }else{
      req.decodedToken = decodedToken;
      next()
    }
  })
  /*
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */


};
