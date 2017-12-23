module.exports = (sender, action, responseText, contexts, parameters) => {
	switch (action) {
		default:
			//unhandled action, just send back the text
			sendTextMessage(sender, responseText);
	}
};
