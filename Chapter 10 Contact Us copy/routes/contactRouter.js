// core module
const path = require('path')

//External module
const express = require('express');
const contactRouter = express.Router();

//Local Module
const rootDir = require('../utils/pathUtils')

contactRouter.get("/contact-us",(req, res, next) => {
  res.sendFile(path.join(rootDir, 'views','contact-us.html'));
});

contactRouter.post("/contact-us",(req, res, next) => {
  res.sendFile(path.join(rootDir, 'views','contact-success.html'));
});

module.exports = contactRouter;