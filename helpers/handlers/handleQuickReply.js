const sendToApiAi = require('../senders/sendToApiAi');

module.exports = (senderID, quickReply, messageId, apiAiService) => {
	let quickReplyPayload = quickReply.payload;
	console.log("Quick reply for message %s with payload %s", messageId, quickReplyPayload);
	
	//send payload to api.ai
	sendToApiAi(senderID, quickReplyPayload, apiAiService);
};
