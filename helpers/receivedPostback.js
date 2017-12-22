const sendTextMessage = require('../senders/sendTextMessage');

/*
 * Postback Event
 *
 * This event is called when a postback is tapped on a Structured Message.
 * https://developers.facebook.com/docs/messenger-platform/webhook-reference/postback-received
 *
 */
module.exports = (event) => {
	let senderID = event.sender.id;
	let recipientID = event.recipient.id;
	let timeOfPostback = event.timestamp;

	// The 'payload' param is a developer-defined field which is set in a postback
	// button for Structured Messages.
	let payload = event.postback.payload;

	switch (payload) {
		default:
			//unindentified payload
			sendTextMessage(senderID, "I'm not sure what you want. Can you be more specific?");
			break;
	}

	console.log("Received postback for user %d and page %d with payload '%s' " +
		"at %d", senderID, recipientID, payload, timeOfPostback);
};
