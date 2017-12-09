const functions = require('firebase-functions');
const Mailgun = require('mailgun.js');

// CORS Express middleware to enable CORS Requests.
const cors = require('cors')({ origin: true });

// $ firebase functions:config:set mailgun.api_key="key-1234"
const MAILGUN_API_KEY = functions.config().mailgun.api_key;
const MAILGUN_SENDER = 'messenger@abhiomkar.in';
const MAILGUN_DOMAIN = 'abhiomkar.in';
const MAILGUN_RECIPIENT = 'abhiomkar@gmail.com';

// For reference:
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((request, response) => {
  if (!(request.method == 'POST' ||
      request.method == 'OPTIONS')) {
    response.status(405).send('Method Not Allowed.');
    return;
  }

  cors(request, response, () => {
    const mailgun = Mailgun.client({
      username: 'api',
      key: MAILGUN_API_KEY,
    });
    const options = {
      from: MAILGUN_SENDER,
      to: MAILGUN_RECIPIENT,
      subject: request.body.subject,
      text: request.body.body,
      'h:Reply-To': request.body.sender,
    };

    try {
      mailgun.messages
        .create(MAILGUN_DOMAIN, options)
        .then(() => {
          response.json({success: true});
        })
        .catch((error) => {
          response.status(500).json({error: true});
        });
    } catch (error) {
      response.status(500).send('Something went wrong!');
    }
  });
});