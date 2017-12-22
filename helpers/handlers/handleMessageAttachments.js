// use this to handle message attachments from users
module.exports = (messageAttachments, senderID) => {
	//for now just reply
	sendTextMessage(senderID, "Attachment received. Thank you.");
};
