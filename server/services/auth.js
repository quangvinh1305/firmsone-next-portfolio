const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const config = require('../config');
const NAMESPACE = config.NAMESPACE;

// MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 50,
    jwksUri: 'https://quangvinh.auth0.com/.well-known/jwks.json',
    handleSigningKeyError: (err, cb) => {
      if (err instanceof jwksRsa.SigningKeyNotFoundError) {
        return cb(new Error('This is bad'));
      }
      console.log(err, "JKJKJKJKJKKJKJ");
      return cb(err);
    }
  }),
  audience: 'Oj7RP4wNrc12nSVsjAER0HiK0jh0bsfp',
  issuer: 'https://quangvinh.auth0.com/',
  algorithms: ['RS256']
})


exports.checkRole = role => (req, res, next) => {
  const user = req.user;

  if (user && user[NAMESPACE + '/role'] && (user[NAMESPACE + '/role'] === role)) {
    next();
  } else {
    return res.status(401).send({title: 'Not Authorized', detail: 'You are not authorized to access this data'})
  }
}



