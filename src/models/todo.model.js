const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 3
  },
  done: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
});

TodoSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Todo', TodoSchema);
