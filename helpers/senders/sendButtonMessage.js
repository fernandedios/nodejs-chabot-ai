const callSendAPI = require('../callers/callSendAPI');

/*
 * Send a button message using the Send API.
 *
 */
module.exports = (recipientId, text, buttons) => {
	const messageData = {
		recipient: {
			id: recipientId
		},
		message: {
			attachment: {
				type: "template",
				payload: {
					template_type: "button",
					text: text,
					buttons: buttons
				}
			}
		}
	};

	callSendAPI(messageData);
};
