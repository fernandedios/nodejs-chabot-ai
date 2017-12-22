/*
 * Call the Send API. The message data goes in the body. If successful, we'll
 * get the message id in a response
 *
 */
module.exports = (messageData) => {
	request({
		uri: 'https://graph.facebook.com/v2.6/me/messages',
		qs: {
			access_token: config.FB_PAGE_TOKEN
		},
		method: 'POST',
		json: messageData

	},
  (error, response, body) => {
		if (!error && response.statusCode == 200) {
			let recipientId = body.recipient_id;
			let messageId = body.message_id;

			if (messageId) {
				console.log("Successfully sent message with id %s to recipient %s",
					messageId, recipientId);
			}
      else {
				console.log("Successfully called Send API for recipient %s",
					recipientId);
			}
		}
    else {
			console.error("Failed calling Send API", response.statusCode, response.statusMessage, body.error);
		}
	});
};
