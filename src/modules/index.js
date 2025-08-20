/* eslint-disable import/no-dynamic-require */
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const isDirectory = (folder, source) =>
  fs.lstatSync(path.join(folder, source)).isDirectory();

const setupRoutes = () => {
  fs.readdirSync(__dirname)
    .filter((file) => isDirectory(__dirname, file))
    .forEach((file) => {
      const moduleRouter = express.Router();
      const currentFile = path.join(__dirname, file);

      fs.readdirSync(currentFile)
        .filter((module) => isDirectory(currentFile, module))
        .forEach((module) => {
          const routeFile = path.join(
            currentFile,
            module,
            `${module}.route.js`
          );
          moduleRouter.use(`/${module}`, require(routeFile));
          console.log(`------> Loaded API: ${file}/${module}`);
        });

      router.use(`/${file}`, moduleRouter);
    });

  return router;
};

module.exports = setupRoutes;
