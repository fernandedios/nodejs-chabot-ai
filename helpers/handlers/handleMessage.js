const sendTextMessage = require('../senders/sendTextMessage');
const sendQuickReply = require('../senders/sendQuickReply');
const sendImageMessage = require('./senders/sendImageMessage');
const callSendAPI = require('../callers/callSendAPI');

module.exports = (message, sender, apiAiService) => {
	switch (message.type) {
		case 0: //text
			sendTextMessage(sender, message.speech);
			break;

		case 2: //quick replies
			let replies = [];
			for (var b = 0; b < message.replies.length; b++) {
				let reply =
				{
					"content_type": "text",
					"title": message.replies[b],
					"payload": message.replies[b]
				}
				replies.push(reply);
			}
			sendQuickReply(sender, message.title, replies, apiAiService);
			break;

		case 3: //image
			sendImageMessage(sender, message.imageUrl);
			break;
      
		case 4:
			// custom payload
			var messageData = {
				recipient: {
					id: sender
				},
				message: message.payload.facebook

			};

			callSendAPI(messageData);
			break;
	}
};
