const config = require('../../config/config');
const callSendAPI = require('../callers/callSendAPI');

/*
 * Send audio using the Send API.
 */
module.exports = (recipientId) => {
	var messageData = {
		recipient: {
			id: recipientId
		},
		message: {
			attachment: {
				type: "audio",
				payload: {
					url: config.SERVER_URL + "/assets/sample.mp3"
				}
			}
		}
	};

	callSendAPI(messageData);
};
