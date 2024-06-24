// src/middleware/basicAuth.js
const basicAuth = require('basic-auth');

const auth = (req, res, next) => {
  const user = basicAuth(req);
  if (user && user.name === 'admin' && user.pass === 'password') {
    return next();
  } else {
    res.set('WWW-Authenticate', 'Basic');
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = auth;
