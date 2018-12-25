var express = require('express');
var app = express();


var TextToSpeechController = require('./text_to_speech/TextToSpeechController');
app.use('/messages', TextToSpeechController);

var CustomersController = require('./customers/CustomersController');
app.use('/customers', CustomersController);

module.exports = app;