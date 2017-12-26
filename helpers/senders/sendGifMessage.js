const config = require('../../config/config');
const callSendAPI = require('../callers/callSendAPI');

/*
 * Send a Gif using the Send API.
 */
module.exports = (recipientId) => {
	let messageData = {
		recipient: {
			id: recipientId
		},
		message: {
			attachment: {
				type: "image",
				payload: {
					url: config.SERVER_URL + "/assets/instagram_logo.gif"
				}
			}
		}
	};

	callSendAPI(messageData);
};
