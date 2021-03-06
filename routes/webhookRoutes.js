const config = require('../config/config');
const helpers = require('../helpers');

module.exports = (app, sessionIds) => {
  // for Facebook verification
  app.get('/webhook/', (req, res) => {
  	console.log("request");

  	if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === config.FB_VERIFY_TOKEN) {
  		res.status(200).send(req.query['hub.challenge']);
  	}
  	else {
  		console.error("Failed validation. Make sure the validation tokens match.");
  		res.sendStatus(403);
  	}
  });

  /*
   * All callbacks for Messenger are POST-ed. They will be sent to the same
   * webhook. Be sure to subscribe your app to your page to receive callbacks
   * for your page.
   * https://developers.facebook.com/docs/messenger-platform/product-overview/setup#subscribe_app
   */
  app.post('/webhook/', (req, res) => {
  	const data = req.body;
  	console.log(JSON.stringify(data));

  	// Make sure this is a page subscription
  	if (data.object == 'page') {
  		// Iterate over each entry
  		// There may be multiple if batched
  		data.entry.forEach(function (pageEntry) {
  			const pageID = pageEntry.id;
  			const timeOfEvent = pageEntry.time;

  			// Iterate over each messaging event
  			pageEntry.messaging.forEach(messagingEvent => {
  				if (messagingEvent.optin) {
  					helpers.receivedAuthentication(messagingEvent);
  				}
  				else if (messagingEvent.message) {
  					helpers.receivedMessage(messagingEvent, sessionIds);
  				}
  				else if (messagingEvent.delivery) {
  					helpers.receivedDeliveryConfirmation(messagingEvent);
  				}
  				else if (messagingEvent.postback) {
  					helpers.receivedPostback(messagingEvent);
  				}
  				else if (messagingEvent.read) {
  					helpers.receivedMessageRead(messagingEvent);
  				}
  				else if (messagingEvent.account_linking) {
  					helpers.receivedAccountLink(messagingEvent);
  				}
  				else {
  					console.log("Webhook received unknown messagingEvent: ", messagingEvent);
  				}
  			});
  		});

  		// Assume all went well.
  		// You must send back a 200, within 20 seconds
  		res.sendStatus(200);
  	}
  });
};
