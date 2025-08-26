const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const isDirectory = (source) =>
  fs.existsSync(source) && fs.lstatSync(source).isDirectory();
const isFile = (source) =>
  fs.existsSync(source) && fs.lstatSync(source).isFile();

const setupRoutes = (baseDir = __dirname) => {
  fs.readdirSync(baseDir).forEach((folder) => {
    const folderPath = path.join(baseDir, folder);

    if (isDirectory(folderPath)) {
      const routeFile = path.join(folderPath, `${folder}.route.js`);
      if (isFile(routeFile)) {
        const moduleRouter = require(routeFile);
        router.use(`/${folder}`, moduleRouter);
        console.log(`-----------> Loaded API: /${folder}`);
      }
    }
  });

  return router;
};

module.exports = setupRoutes;
