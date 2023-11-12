const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/user');

const TOKEN_VALIDITY = parseInt(process.env.TOKEN_VALIDITY);
const BCRYPT_SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);

const encrypt = async (pass) => {
  return await bcrypt.hash(pass, BCRYPT_SALT_ROUNDS);
};

const comparePass = async (pass, encryptedPass) => {
  return bcrypt.compare(pass, encryptedPass);
};

const createToken = (user) => {
  let payload = {
    id: user._id,
    email: user.email
  };

  let token = jwt.sign(payload, process.env.SECRET, {
    expiresIn: TOKEN_VALIDITY
  });

  return token;
};

const validateLogin = async (user, pass) => {
  if (!user) {
    throw 'User not found!';
  } else if (!await comparePass(pass, user.password)) {
    throw 'Invalid Password!';
  }
};


const isAuthenticated = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization'];

  if (!token) {
    return res.status(401).send({ 
      auth: false, 
      message: 'Token not found in request headers.'
    });
  }

  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }
  
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).send({ 
        auth: false, 
        message: 'Invalid Token' 
      });
    }
    
    User.findById(decoded.id).then(user => {
      req.session = user;
      next();
    });
    
  });
};

const canAccess = (roles) => {
  return (req, res, next) => {
    let can = false;

    roles.forEach((role) => {
      if (req.session.role === role) {
        can = true;
      }
    });

    if (can) {
      next();
    } else {
      res.status(403).send({auth: false, message: 'Unauthorized'});
    }
  };
};


const hasRole = (role) => {
  return (req, res, next) => {
    if (req.session.role === role || req.session.role === "admin") {
      next();
    } else {
      return res.status(401).send({ 
        auth: false, 
        message: 'Unauthorized!'
      });
    }
  };
};

module.exports = {
  encrypt,
  comparePass,
  createToken,
  isAuthenticated,
  validateLogin,
  hasRole,
  canAccess
};