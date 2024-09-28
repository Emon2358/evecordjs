<img src="https://img.shields.io/badge/-Node.js-339933.svg?logo=node.js&style=plastic"><img src="https://img.shields.io/badge/-Discord-7289DA.svg?logo=discord&style=plastic">

# [EvecordJS](https://www.npmjs.com/package/evecordjs)

![image](https://cdn.discordapp.com/attachments/1276191968543772732/1289434269697048628/IMG_6041.png?ex=66f8cebe&is=66f77d3e&hm=35bc9d60a718fa7f745caad3b2c124bb08ab44303be332121ed37552007be123&)

EvecordJS is a JavaScript library that allows you to create Discord bots easily. With this library, even beginners can develop Discord bots with minimal effort.

## Features

- Easy setup
- Simple implementation of basic reaction functions
- Integration with Express.js

## Installation

Install EvecordJS using npm:

```bash
npm install evecordjs
```

## Usage

### Basic Usage

1. Create a `server.js` file with the following content:

```javascript
// Add polyfills for ReadableStream
const { ReadableStream } = require('web-streams-polyfill');
global.ReadableStream = ReadableStream;

const express = require('express');
const EvecordJS = require('evecordjs');
require('dotenv').config();

const app = express();
const bot = new EvecordJS();

// Keep-alive endpoint
app.get("/", (req, res) => {
    res.send("Bot is alive!");
});

// Start the server on port 3000
app.listen(3000, (err) => {
    if (err) {
        console.error('Failed to start server:', err);
    } else {
        console.log('Web server is running on port 3000');
    }
});

// Set up default reaction messages
bot.registerReaction('ping', 'Pong!');
bot.registerReaction('hello', 'Hello there!');

// Start the bot
bot.start();
```

2. Create a `package.json` file with the following content:

```json
{
  "name": "hello-node",
  "version": "1.0.0",
  "description": "A simple Express app with evecordjs bot",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "evecordjs": "^1.0.6",
    "express": "^4.17.1",
    "dotenv": "^16.0.0",
    "axios": "^0.21.1",
    "undici": "^4.16.0",
    "web-streams-polyfill": "^3.2.1"
  },
  "engines": {
    "node": "16.14.2"
  }
}
```

3. Create a `.env` file in your project root and add your Discord bot token:

```
DISCORD_BOT_TOKEN=your_bot_token_here
```

4. Install the dependencies:

```bash
npm install
```

5. Start your bot:

```bash
npm start
```

### Customizing Bot Reactions

You can add custom reactions using the `registerReaction` method:

```javascript
bot.registerReaction('custom', 'This is a custom response!');
```

## Environment Setup

Make sure you have Node.js version 16.14.2 installed. You can check your Node.js version by running:

```bash
node --version
```

## Troubleshooting

If you encounter any issues related to `ReadableStream`, ensure that you have included the polyfill at the top of your `server.js` file as shown in the example above.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

If you need help or have any questions, please open an issue on the GitHub repository.

Remember to replace `your_bot_token_here` with your actual Discord bot token in the `.env` file.

Happy botting!
