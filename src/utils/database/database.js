const mongoose = require('mongoose');
const { mongoConnect } = require('./mongoHandler.js');

const connectDB = async () => {
  try {
    mongoConnect();
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
  }
};

module.exports = connectDB;
