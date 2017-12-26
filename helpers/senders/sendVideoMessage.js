const config = require('../../config/config');
const callSendAPI = require('../callers/callSendAPI');

/*
 * Send a video using the Send API.
 * example videoName: "/assets/allofus480.mov"
 */
module.exports = (recipientId, videoName) => {
	var messageData = {
		recipient: {
			id: recipientId
		},
		message: {
			attachment: {
				type: "video",
				payload: {
					url: config.SERVER_URL + videoName
				}
			}
		}
	};

	callSendAPI(messageData);
};
