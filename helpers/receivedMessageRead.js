/*
 * Message Read Event
 *
 * This event is called when a previously-sent message has been read.
 * https://developers.facebook.com/docs/messenger-platform/webhook-reference/message-read
 */
module.exports = (event) => {
	const senderID = event.sender.id;
	const recipientID = event.recipient.id;

	// All messages before watermark (a timestamp) or sequence have been seen.
	const watermark = event.read.watermark;
	const sequenceNumber = event.read.seq;

	console.log("Received message read event for watermark %d and sequence " + "number %d", watermark, sequenceNumber);
};
