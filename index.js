var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressJWT = require('express-jwt');
var request = require('request');
var jwt = require('jsonwebtoken');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/beers', function(req, res) {
  var key = process.env.BEER_API_KEY;
  var searchTerm = req.query.q
  request('https://api.brewerydb.com/v2/search?q='+searchTerm+'&type=beer&key='+key, function(err, response, data) {
    console.log(JSON.parse(data).data)
    res.send(JSON.parse(data).data)
  });
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(process.env.PORT || 3000);