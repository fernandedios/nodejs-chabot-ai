const callSendAPI = require('../callers/callSendAPI');
const config = require('../../config/config');

/*
 * Send a message with the account linking call-to-action
 */
module.exports = (recipientId) => {
	const messageData = {
		recipient: {
			id: recipientId
		},
		message: {
			attachment: {
				type: "template",
				payload: {
					template_type: "button",
					text: "Welcome. Link your account.",
					buttons: [{
						type: "account_link",
						url: config.SERVER_URL + "/authorize"
          }]
				}
			}
		}
	};

	callSendAPI(messageData);
};
