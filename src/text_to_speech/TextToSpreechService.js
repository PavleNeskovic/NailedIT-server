var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
var fs = require('fs');
var twilio = require('twilio');

var textToSpeech = new TextToSpeechV1({
  iam_apikey: process.env.SPEECH_TO_TEXT_IAM_APIKEY,
  url: process.env.SPEECH_TO_TEXT_URL
});

var synthesizeParams = {
    text: 'Hello world',
    accept: 'audio/mp3',
    voice: 'en-US_AllisonVoice'
  };
  
function synthesize(type, customer, callback) {
  synthesizeParams.text = createMessage(type, customer);
    // Pipe the synthesized text to a file.
    textToSpeech.synthesize(synthesizeParams, function(err, response) {
      callback(response);
    });
}  

function createMessage(type, customer){
  if(type == "offer") {
    return `Dear ${customer.name}, This is Alice from Nailed I T. 
    We are happy to inform you that our company is giving a discount for our loyal customers. 
    Please note that you will have ${customer.discount} dollars discount, when you visit our store next time. 
    Thank you and have a nice day!`
  } else if(type == "demand") {
    return `Dear ${customer.name}, This is Alice from Nailed I T.
    This is a reminder that your account balance of ${customer.balance} dollars was overdue.
    Please pay this amount today. I have sent you enclosed a stamped payment envelope for your convenience.
    Thank you for your payment and have a nice day!`
  }

} 
  

  module.exports.synthesize = synthesize;