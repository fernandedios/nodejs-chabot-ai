module.exports = (event, sessionIds) => {
	let senderID = event.sender.id;
	let recipientID = event.recipient.id;
	let timeOfMessage = event.timestamp;
	let message = event.message;

	if (!sessionIds.has(senderID)) {
		sessionIds.set(senderID, uuid.v1());
	}

	console.log("Received message for user %d and page %d at %d with message:", senderID, recipientID, timeOfMessage);
	console.log(JSON.stringify(message));

	let isEcho = message.is_echo;
	let messageId = message.mid;
	let appId = message.app_id;
	let metadata = message.metadata;

	// You may get a text or attachment but not both
	let messageText = message.text;
	let messageAttachments = message.attachments;
	let quickReply = message.quick_reply;

	if (isEcho) {
		handleEcho(messageId, appId, metadata);
		return;
	}
	else if (quickReply) {
		handleQuickReply(senderID, quickReply, messageId);
		return;
	}

	if (messageText) {
		//send message to api.ai
		sendToApiAi(senderID, messageText);
	}
	else if (messageAttachments) {
		handleMessageAttachments(messageAttachments, senderID);
	}
};
