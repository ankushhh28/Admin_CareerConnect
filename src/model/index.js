const mongoose = require('mongoose');

const userSchema = require('./users/userSchema.js');

const models = {};

const setupModels = async () => {
  models.userSchema = mongoose.model('user', userSchema);
};

module.exports = {
  setupModels,
  models,
};
