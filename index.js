var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressJWT = require('express-jwt');
var request = require('request');
var jwt = require('jsonwebtoken');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'bower_components')));

var secret = process.env.SUPER_SECRET;

var mongoose = require('mongoose');
var User = require('./models/user');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/beervana');

// app.use('/api/beers', expressJWT({secret: secret}));
app.use('/api/users', expressJWT({secret: secret})
.unless({path: ['/api/users'], method: 'post'}));

app.use('/api/users', require('./controllers/users'));

app.post('/api/auth', function(req, res) {
  User.findOne({email: req.body.email}, function(err, user) {
    if (err || !user) return res.status(401).send({message: 'User not found'});
    user.authenticated(req.body.password, function(err, result) {
      if (err || !result) return res.status(401).send({message: 'User not authenticated'});

      var token = jwt.sign(user, secret);
      res.send({user: user, token: token});
    });
  });
});

app.get('/api/beers', function(req, res) {
  var key = process.env.BEER_API_KEY;
  var searchTerm = req.query.q
  request('https://api.brewerydb.com/v2/search?q='+searchTerm+'&type=beer&key='+key, function(err, response, data) {
    console.log(JSON.parse(data).data)
    res.send(JSON.parse(data).data)
  });
});

app.get('/api/brewerys', function(req, res) {
  var key = process.env.BEER_API_KEY;
  var searchTerm = req.query.q
  request('https://api.brewerydb.com/v2/search?q='+searchTerm+'&type=brewery&key='+key, function(err, response, data) {
    console.log(JSON.parse(data).data)
    res.send(JSON.parse(data).data)
  });
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(process.env.PORT || 3000);