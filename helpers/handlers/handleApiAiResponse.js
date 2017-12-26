const sendTypingOff = require('../senders/sendTypingOff');
const isDefined = require('../isDefined');
const handleCardMessages = require('../handlers/handleCardMessages');
const handleMessage = require('../handlers/handleMessage');
const handleApiAiAction = require('../handlers/handleApiAiAction');
const sendTextMessage = require('../senders/sendTextMessage');

module.exports = (sender, response) => {
	let responseText = response.result.fulfillment.speech;
	let responseData = response.result.fulfillment.data;
	let messages = response.result.fulfillment.messages;
	let action = response.result.action;
	let contexts = response.result.contexts;
	let parameters = response.result.parameters;

	sendTypingOff(sender);

	if (isDefined(messages) && (messages.length === 1 && messages[0].type !== 0 || messages.length > 1)) {
		let timeoutInterval = 1100;
		let previousType ;
		let cardTypes = [];
		let timeout = 0;
		for (let i = 0; i < messages.length; i++) {

			if ( previousType === 1 && (messages[i].type !== 1 || i === messages.length - 1)) {
				timeout = (i - 1) * timeoutInterval;
				setTimeout(handleCardMessages.bind(null, cardTypes, sender), timeout);
				cardTypes = [];
				timeout = i * timeoutInterval;
				setTimeout(handleMessage.bind(null, messages[i], sender, apiAiService), timeout);
			}
			else if ( messages[i].type === 1 && i === messages.length - 1) {
				cardTypes.push(messages[i]);
        timeout = (i - 1) * timeoutInterval;
    		setTimeout(handleCardMessages.bind(null, cardTypes, sender), timeout);
    		cardTypes = [];
			}
			else if ( messages[i].type === 1 ) {
				cardTypes.push(messages[i]);
			}
			else {
				timeout = i * timeoutInterval;
				setTimeout(handleMessage.bind(null, messages[i], sender, apiAiService), timeout);
			}

			previousType = messages[i].type;
		}
	}
	else if (responseText === '' && !isDefined(action)) {
		//api ai could not evaluate input.
		console.log('Unknown query' + response.result.resolvedQuery);
		sendTextMessage(sender, "I'm not sure what you want. Can you be more specific?");
	}
	else if (isDefined(action)) {
		handleApiAiAction(sender, action, responseText, contexts, parameters);
	}
	else if (isDefined(responseData) && isDefined(responseData.facebook)) {
		try {
			console.log('Response as formatted message' + responseData.facebook);
			sendTextMessage(sender, responseData.facebook);
		}
		catch (err) {
			sendTextMessage(sender, err.message);
		}
	}
	else if (isDefined(responseText)) {
		sendTextMessage(sender, responseText);
	}
};
