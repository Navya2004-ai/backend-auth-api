const mongoose = require('mongoose');

const preferencesSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  theme: { type: String, default: 'light' },
  layout: { type: String, default: 'grid' },
});

module.exports = mongoose.model('Preferences', preferencesSchema);

