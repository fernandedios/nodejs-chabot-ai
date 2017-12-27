const callSendAPI = require('../callers/callSendAPI');

/*
 * Send a read receipt to indicate the message has been read
 */
module.exports = (recipientId) => {
	const messageData = {
		recipient: {
			id: recipientId
		},
		sender_action: "mark_seen"
	};

	callSendAPI(messageData);
};
