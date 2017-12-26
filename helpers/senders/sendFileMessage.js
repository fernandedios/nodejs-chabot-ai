const config = require('../../config/config');
const callSendAPI = require('../callers/callSendAPI');

/*
 * Send a video using the Send API.
 * example fileName: fileName"/assets/test.txt"
 */
module.exports = (recipientId, fileName) => {
	let messageData = {
		recipient: {
			id: recipientId
		},
		message: {
			attachment: {
				type: "file",
				payload: {
					url: config.SERVER_URL + fileName
				}
			}
		}
	};

	callSendAPI(messageData);
};
