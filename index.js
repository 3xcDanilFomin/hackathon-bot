import TelegramBot from "node-telegram-bot-api";

import { configBot } from "./config.js";

const bot = new TelegramBot(configBot.token, {
  polling: true,
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  switch (text) {
    case "/start":
      await bot.sendSticker(chatId, configBot.idSticker);
      await bot.sendMessage(chatId, "Привет, я бот Мавр и вот что я умею...");
      await bot.sendMessage(
        chatId,
        "Здесь идёт описание теста..",
        configBot.options
      );
      break;

    default:
      break;
  }
});

bot.on("callback_query", (msg) => {
  console.log(JSON.parse(JSON.stringify(msg.data)));
});
