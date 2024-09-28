#!/usr/bin/env node

const { Client, GatewayIntentBits } = require("discord.js");
const fs = require("fs").promises;

class EvecordJS {
  constructor() {
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
    });

    this.reactions = new Map();
    this.jsonFilePath = "./reactions.json";

    this.loadReactions();

    this.client.on("messageCreate", async (message) => {
      if (message.author.bot) return;

      if (this.reactions.has(message.content)) {
        try {
          await message.channel.send(this.reactions.get(message.content));
        } catch (error) {
          console.error("Failed to send message:", error);
        }
      } else {
        console.log(`No reaction found for message: ${message.content}`);
      }
    });
  }

  registerReaction(triggerMessage, replyMessage) {
    this.reactions.set(triggerMessage, replyMessage);
    this.saveReactions();
  }

  async loadReactions() {
    try {
      const data = await fs.readFile(this.jsonFilePath, "utf-8");
      this.reactions = new Map(Object.entries(JSON.parse(data)));
      console.log("Reactions loaded from JSON:", this.reactions);
    } catch (error) {
      if (error.code === "ENOENT") {
        console.log(
          "No reactions.json file found, starting with an empty map."
        );
      } else {
        console.error("Failed to load reactions from JSON:", error);
      }
    }
  }

  async saveReactions() {
    try {
      await fs.writeFile(
        this.jsonFilePath,
        JSON.stringify(Object.fromEntries(this.reactions), null, 2)
      );
      console.log("Reactions saved to JSON.");
    } catch (error) {
      console.error("Failed to save reactions to JSON:", error);
    }
  }

  start() {
    this.client.login(process.env.TOKEN).catch((error) => {
      console.error("Failed to login to Discord:", error);
    });

    this.client.once("ready", () => {
      console.log("Bot is online!");
    });
  }
}

module.exports = EvecordJS;
