var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var textToSpeechService = require('./TextToSpreechService');

router.use(bodyParser.urlencoded({limit: '50mb', extended: true }));
router.use(bodyParser.json({limit: '50mb'}));

router.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
   });

router.post('/demands', function (req, res) {
    textToSpeechService.synthesize("demand",req.body, function(response){
        res.end(response);
    })  
});

router.post('/offers', function (req, res) {
    textToSpeechService.synthesize("offer",req.body, function(response){
        res.end(response);
    })  
});

module.exports = router;