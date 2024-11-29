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
      await bot.sendMessage(
        chatId,
        "Приветствую тебя! Я — бот Мавр, и я здесь, чтобы помочь тебе совершить важный шаг на пути к твоему будущему. Выбор профессии — это не простое решение. Позволь мне помочь тебе с выбором будущей профессии!"
      );
      await bot.sendMessage(
        chatId,
        "Пройди наш увлекательный тест, чтобы я помог тебе определить твою будущую профессию!",
        configBot.options
      );
      break;
    default:
      await bot.sendSticker(
        chatId,
        "CAACAgIAAxkBAAENPiVnSceUYaKk_CBMVBjIMSs-LntXAgACpTkAArTwWEjLlMMDTBAB8TYE"
      );
      await bot.sendMessage(chatId, "Я не знаю такую команду.");
      break;
  }
});
