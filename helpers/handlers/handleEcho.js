
// https://developers.facebook.com/docs/messenger-platform/webhook-reference/message-echo
module.exports = (messageId, appId, metadata) => {

	// Just logging message echoes to console
	console.log("Received echo for message %s and app %d with metadata %s", messageId, appId, metadata);
};
