const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./utils/database/database.js');
const setupRoutes = require('./modules/index.js');

dotenv.config();

const app = express();

const PORT = process.env.PORT;

const test = () => {
  return 'Running';
};

app.use(express.json());

connectDB();

app.use('/', setupRoutes());

app.use('/test', test);

app.listen(PORT, () => {
  console.log(`✅ Server Running in this port : ${PORT}`);
});
