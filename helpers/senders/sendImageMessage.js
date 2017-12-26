const callSendAPI = require('../senders/callSendAPI');
/*
 * Send an image using the Send API.
 */
module.exports = (recipientId, imageUrl) => {
	var messageData = {
		recipient: {
			id: recipientId
		},
		message: {
			attachment: {
				type: "image",
				payload: {
					url: imageUrl
				}
			}
		}
	};

	callSendAPI(messageData);
};
