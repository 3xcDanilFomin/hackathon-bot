import dotenv from "dotenv";

dotenv.config();

export const configBot = {
  token: process.env.BOT_TOKEN,
  idSticker:
    "CAACAgIAAxkBAAENO-tnSARACPQfihnQ0JF70kNdscKtOwACzTIAAtyEWEgs4kVS4Lfk0DYE",
  options: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "Пройти тест",
            web_app: { url: "https://hackathon-front-rho.vercel.app/" },
          },
        ],
      ],
    }),
  },
};
