const callSendAPI = require('../callers/callSendAPI');

module.exports = (recipientId, text) => {
	var messageData = {
		recipient: {
			id: recipientId
		},
		message: {
			text: text
		}
	}
	callSendAPI(messageData);
};
