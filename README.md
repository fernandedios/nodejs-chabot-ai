nodejs-chabot-ai
=========

> NodeJs Express, Diagflow AI, Facebook Messenger

A chatbot AI helper starting point application

Getting Started
------------

Checkout this repo, install dependencies, configure, then start the app.

```bash
$ git clone git@github.com:fernandedios/nodejs-chabot-ai.git
$ cd nodejs-chabot-ai
$ npm install

-- configure app

$ npm start
```

Configuration
------------

This web application requires the following as starting point:
- [Facebook Application]
- [Diagflow Account]


### Local Development Variables
```js
{
  "dev": {
    "FB_PAGE_TOKEN": "your_facebook_page_token",
    "FB_VERIFY_TOKEN": "your_facebook_verify_token",
    "API_AI_CLIENT_ACCESS_TOKEN": "your_diagflow_ai_access_token",
    "FB_APP_SECRET": "your_facebook_app_secret",
    "SERVER_URL": "http://localhost:5000"
  }
}

```

Save as 'keys.json' and place it inside the config folder.

### Production Environment Variables
You will need to add the following environment variables to your production host

```js
FB_PAGE_TOKEN,
FB_VERIFY_TOKEN,
API_AI_CLIENT_ACCESS_TOKEN,
FB_APP_SECRET,
SERVER_URL
```

Thanks
------

nodejs-chabot-ai* © 2018, Fernan de Dios. Released under the [MIT License].<br>

> [fernandedios.com](http://fernandedios.com) &nbsp;&middot;&nbsp;
> GitHub [@fernandedios](https://github.com/fernandedios) &nbsp;&middot;&nbsp;
> Twitter [@fernan_de_dios](https://twitter.com/fernan_de_dios)

[MIT License]: http://mit-license.org/
[Facebook Application]: http://developers.facebook.com/
[Diagflow Account]: https://dialogflow.com/
