const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

router.get('/', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

router.post('/', async (req, res) => {
  const newEvent = new Event(req.body);
  const savedEvent = await newEvent.save();
  res.json(savedEvent);
});

router.put('/:id', async (req, res) => {
  const updated = await Event.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
