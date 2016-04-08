var express = require('express');
var User = require('../models/user');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    User.find(function(err, users) {
      if (err) return res.status(500).send(err);
      res.send(users);
    });
  })
  .post(function(req, res) {
    User.create(req.body, function(err, user) {
      if (err) return res.status(500).send(err);
      res.send(user);
    });
  });

router.post('/addBeer', function(req, res) {
  var userId = req.user._doc._id;
  User.findById(userId, function(err, user) {
    // console.log(user)
    user.beers.push(req.body)
    user.save(function(err) {
      if (err) return handleError(err)
        // console.log('Success!');
    });
  });
});

router.post('/removeBeer', function(req, res) {
  var userId = req.user._doc._id;
  User.findById(userId, function(err, user) {
    // console.log(user)
    user.beers.push(req.body)
    user.save(function(err) {
      if (err) return handleError(err)
        // console.log('Success!');
    });
  });
});

router.post('/addBrewery', function(req, res) {
  var userId = req.user._doc._id;
  User.findById(userId, function(err, user) {
    // console.log(user)
    user.brewerys.push(req.body)
    user.save(function(err) {
      if (err) return handleError(err)
        // console.log('Success!');
    });
  });
});

router.post('/removeBrewery', function(req, res) {
  var userId = req.user._doc._id;
  User.findById(userId, function(err, user) {
    // console.log(user)
    user.brewerys.push(req.body)
    user.save(function(err) {
      if (err) return handleError(err)
        // console.log('Success!');
    });
  });
});

router.get('/userFaves', function(req, res) {
  var userId = req.user._doc._id;
  User.findById(userId, function(err, user) {
    if (err) return handleError(err)
      res.send(user)
  });
});

router.get('/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) return res.status(500).send(err);
    res.send(user);
  });
});

module.exports = router;