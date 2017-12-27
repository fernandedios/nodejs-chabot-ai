const callSendAPI = require('../callers/callSendAPI');

module.exports = (recipientId, recipient_name, currency, payment_method,
							timestamp, elements, address, summary, adjustments) => {

	// Generate a random receipt ID as the API requires a unique ID
	const receiptId = "order" + Math.floor(Math.random() * 1000);

	const messageData = {
		recipient: {
			id: recipientId
		},
		message: {
			attachment: {
				type: "template",
				payload: {
					template_type: "receipt",
					recipient_name: recipient_name,
					order_number: receiptId,
					currency: currency,
					payment_method: payment_method,
					timestamp: timestamp,
					elements: elements,
					address: address,
					summary: summary,
					adjustments: adjustments
				}
			}
		}
	};

	callSendAPI(messageData);
};
