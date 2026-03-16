// core module
const path = require('path');

//External module
const express = require('express');
const hostRouter = express.Router();

//Local Module
// const rootDir = require('../utils/pathUtil')

hostRouter.get("/add-home", (req, res, next) => {
  res.render('addHome',{pageTitle:'Add Home to airbnb'});
});

const registeredHomes = [];


hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  registeredHomes.push({
    houseName: req.body.houseName,
    photoUrl: req.body.photoUrl,
    location: req.body.location,
    Price: req.body.Price,
    rating: req.body.rating
  })
  res.render('homeAdded',{pageTitle : 'Home Added Successfully'});
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;