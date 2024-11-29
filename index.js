import TelegramBot from "node-telegram-bot-api";
import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import https from "https"; 
import fs from "fs"; 

import { configBot } from "./config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 8080;

const options = {
  key: fs.readFileSync("/root/mycerts/private.key"), 
  cert: fs.readFileSync("/root/mycerts/certificate.crt"), 
};

app.use(express.static(__dirname + "/public"));
const bot = new TelegramBot(configBot.token, {
  polling: true,
});
app.use(express.json());
app.use(cors());

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

app.get("/", (req, res) => {
  res.send("Hello World!");
});

https.createServer(options, app).listen(port, () => {
  console.log("Сервер запущен на " + port);
});
