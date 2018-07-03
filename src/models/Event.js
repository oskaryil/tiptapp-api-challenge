const mongoose, { Schema } = require('mongoose');

const EventSchema = new Schema({
  name: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);
