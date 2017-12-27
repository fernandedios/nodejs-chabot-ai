const callSendAPI = require('../callers/callSendAPI');

/*
 * Turn typing indicator off
 */
module.exports = (recipientId) => {
	const messageData = {
		recipient: {
			id: recipientId
		},
		sender_action: "typing_off"
	};

	callSendAPI(messageData);
};
