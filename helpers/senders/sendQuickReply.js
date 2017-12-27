const isDefined = require('../isDefined');
const callSendAPI = require('../callers/callSendAPI');

/*
 * Send a message with Quick Reply buttons.
 */
module.exports = (recipientId, text, replies, metadata) => {
	const messageData = {
		recipient: {
			id: recipientId
		},
		message: {
			text: text,
			metadata: isDefined(metadata) ? metadata : '',
			quick_replies: replies
		}
	};

	callSendAPI(messageData);
};
