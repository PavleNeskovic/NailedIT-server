var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var request = require('request'); 
var customersMock = require('./CustomersMock');

router.use(bodyParser.urlencoded({limit: '50mb', extended: true }));
router.use(bodyParser.json({limit: '50mb'}));

router.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
   });

router.get('/', function (req, res) {
    request('https://api.myjson.com/bins/1eyqeh', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.end(response.body);
        } else {
          res.end(customersMock.getMockData());
        }
      })
});

module.exports = router;