const express = require('express');
const router = express.Router();
const User = require('../model/user');
const Security = require('../service/security_service');

router.post('/', async (req, res) => {
  let user = await User.findOne({email: req.body.email});

  try {
    await Security.validateLogin(user, req.body.password);

    let token = Security.createToken(user);
    res.status(200).json({ auth: true, token, role: user.role, user: {name: user.name, email: user.email} });
  } catch (err) {
    res.status(401).send({ auth: false, err });
  }
});

router.delete('/', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});

module.exports = router;