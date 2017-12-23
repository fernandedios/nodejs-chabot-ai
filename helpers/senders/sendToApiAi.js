const sendTypingOn = require('./sendTypingOn');
const isDefined = require('../isDefined');
const handleApiAiResponse = require('../handlers/handleApiAiResponse');

module.exports = (sender, text, apiAiService) => {
	sendTypingOn(sender);
	let apiaiRequest = apiAiService.textRequest(text, {
		sessionId: sessionIds.get(sender)
	});

	apiaiRequest.on('response', (response) => {
		if (isDefined(response.result)) {
			handleApiAiResponse(sender, response);
		}
	});

	apiaiRequest.on('error', (error) => console.error(error));
	apiaiRequest.end();
};
