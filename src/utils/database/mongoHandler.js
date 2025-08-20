const mongoose = require('mongoose');
const { setupModels } = require('../../model/index.js');

let connection;
const mongoServerOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const mongoConnect = async () => {
  const mongo_url = process.env.MONGO_URl;
  try {
    connection = await mongoose.connect(mongo_url, mongoServerOptions);
    console.log('✅ Connected to Mongo DB');
  } catch (error) {
    throw new Error(error);
  }

  try {
    await setupModels();
    console.log('✅ Mongo DB Models Loaded');
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { mongoConnect };
