const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./utils/database/database.js");
const setupRoutes = require("./modules/index.js");
const errorHandler = require("./middlewares/errorHandler.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`✅ Server Running on port: ${PORT}`);
    app.use("/", setupRoutes());
    app.use(errorHandler);
  });
};

startServer();
