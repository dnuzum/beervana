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

router.delete('/removeBeer', function(req, res) {
  var userId = req.user._doc._id;
  User.findById(userId, function(err, user) {
    console.log(user)
    console.log("***** delete this fave:", req.body.id);
    user.beers = user.beers.filter(function(beer) {
      return beer.id !== req.body.id;
    })
    user.save(function(err) {
      if (err) return handleError(err)
        res.sendStatus(200)
    });
  })
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

router.delete('/removeBrewery', function(req, res) {
  var userId = req.user._doc._id;
  User.findById(userId, function(err, user) {
    console.log(user)
    console.log("***** delete this fave:", req.body.id);
    user.brewerys = user.brewerys.filter(function(brewery) {
      return brewery.id !== req.body.id;
    })
    user.save(function(err) {
      if (err) return handleError(err)
        res.sendStatus(200)
    });
  })
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