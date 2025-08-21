const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./utils/database/database.js');
const setupRoutes = require('./modules/index.js');
const errorHandler = require('./middlewares/errorHandler.js');

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use('/', setupRoutes());

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`✅ Server Running in this port : ${PORT}`);
});
