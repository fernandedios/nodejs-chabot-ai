const callSendAPI = require('../callers/callSendAPI');

/*
 * Turn typing indicator on
 */
module.exports = (recipientId) => {
	let messageData = {
		recipient: {
			id: recipientId
		},
		sender_action: "typing_on"
	};

	callSendAPI(messageData);
};
