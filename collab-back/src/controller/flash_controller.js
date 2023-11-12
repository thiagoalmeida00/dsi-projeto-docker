const express = require('express');
const router = express.Router();
const Security = require('../service/security_service');
const Flash = require('../model/flash')
const Artist  = require('../model/artist');

router.get('/', async (req, res) => {
  res.json(await Flash.find());
});

router.post('/', Security.isAuthenticated, Security.hasRole('admin'), async (req, res) => {
  data = req.body;
  const newFlash = await new Flash(data).save();
  let artist = await Artist.findById(data.idArtist);
  console.log(artist);
  artist.flashes.push(newFlash._id);
  await new Artist(artist).save();

  return res.status(201).json(newFlash);
});

router.patch('/:id', Security.isAuthenticated, Security.hasRole('admin'),findById, async (req, res) => {
  const data = req.body;
  req.flash.status = data.status;
  const flashUpdated = await new Flash(req.flash).save();
  return res.status(201).json(flashUpdated);
});

async function findById(req, res, next) {
  try {
    req.flash = await Flash.findById(req.params.id);
    if (req.flash === null) {
      return res.status(404).json({ 
        message: 'Flash not found!'
      });
    }
  } catch(err) {
    return res.status(500).json({ message: err.message });
  }
  next();
}

module.exports = router;