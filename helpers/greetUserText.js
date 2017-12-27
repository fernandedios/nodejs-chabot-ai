const config = require('../config/config');
const sendTextMessage = require('./senders/sendTextMessage');

module.exports = (userId) => {
	//first read user firstname
	request({
		uri: 'https://graph.facebook.com/v2.7/' + userId,
		qs: {
			access_token: config.FB_PAGE_TOKEN
		}
	},
  (error, response, body) => {
		if (!error && response.statusCode === 200) {

			var user = JSON.parse(body);

			if (user.first_name) {
				console.log("FB user: %s %s, %s", user.first_name, user.last_name, user.gender);
				sendTextMessage(userId, "Welcome " + user.first_name + '!');
			}
      else {
				console.log("Cannot get data for fb user with id", userId);
			}
		}
    else {
			console.error(response.error);
		}
	});
};
