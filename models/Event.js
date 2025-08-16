const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  start: { type: Date, required: true },
  end: { type: Date },
  allDay: { type: Boolean, default: false }
});

module.exports = mongoose.model('Event', EventSchema);
