const express = require('express');
const router = express.Router();
const Security = require('../service/security_service');
const Artist = require('../model/artist')

router.get('/', async (req, res) => {
  res.json(await Artist.find().populate('flashes'));
});

router.post('/', Security.isAuthenticated, Security.hasRole('admin'), async (req, res) => {
  const data = req.body;
  try {
    const newArtist = await new Artist(data).save();
    res.status(201).json({
      id: newArtist._id,
      name: newArtist.name,
      email: newArtist.email,
      phone: newArtist.phone,
      flashes: newArtist.flashes
    });
  } catch (e) {
    res.status(500).json(e);
  }
});

async function findById(req, res, next) {
  try {
    req.artist = await Artist.findById(req.params.id);
    
    if (req.artist === null) {
      return res.status(404).json({ 
        message: 'Artist not found!'
      });
    }
  } catch(err) {
    return res.status(500).json({ message: err.message });
  }

  next();
};

module.exports = router;