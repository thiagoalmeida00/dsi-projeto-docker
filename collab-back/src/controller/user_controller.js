const express = require('express');
const router = express.Router();
const User = require('../model/user');
const Security = require('../service/security_service');

router.get('/', Security.isAuthenticated, Security.hasRole('admin'), async (req, res) => {
  res.json(await User.find());
});

router.get('/:id', Security.isAuthenticated, findById, async (req, res) => {
  res.json(req.user);
});

router.post('/', async (req, res) => {
  const data = req.body;
  data.password = await Security.encrypt(data.password);

  try {
    const newUser = await new User(data).save();
    res.status(201).json({
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      createdAt: newUser.createdAt
    });
  } catch (e) {
    res.status(500).json(e);
  }
});

router.delete('/:id', Security.isAuthenticated, Security.hasRole('admin'), findById, async (req, res) => {
  await req.user.remove();
  res.status(200).json({
    message: 'User removed'
  });

});

router.put('/:id', Security.isAuthenticated, findById, async (req, res) => {

  if (req.session.role === 'administrador' || req.session._id === req.params.id) {
    let usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      message: 'User updated!',
      usuario, usuario
    });
  } else {
    res.status(403).send({auth: false, message: 'Unauthorized!'});
  }
});

async function findById(req, res, next) {
  try {
    req.user = await User.findById(req.params.id);
    
    if (req.user === null) {
      return res.status(404).json({ 
        message: 'User not found!'
      });
    }
  } catch(err) {
    return res.status(500).json({ message: err.message });
  }

  next();
};

module.exports = router;