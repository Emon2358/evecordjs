// Add polyfills for ReadableStream
const { ReadableStream } = require('web-streams-polyfill');
global.ReadableStream = ReadableStream;

const express = require('express');
const EvecordJS = require('evecordjs');
require('dotenv').config();

const app = express();
const bot = new EvecordJS();

// keep-alive用のエンドポイント
app.get("/", (req, res) => {
    res.send("Bot is alive!");
});

// サーバーをポート3000で起動
app.listen(3000, (err) => {
    if (err) {
        console.error('Failed to start server:', err);
    } else {
        console.log('Web server is running on port 3000');
    }
});

// デフォルトの反応メッセージの設定
bot.registerReaction('ping', 'Pong!');
bot.registerReaction('hello', 'Hello there!'); // 新しい反応を追加

// ボットを起動
bot.start();
