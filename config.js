import dotenv from "dotenv";

dotenv.config();

export const configBot = {
  token: process.env.BOT_TOKEN,
  idSticker:
    "CAACAgIAAxkBAAENOWtnRgvJ3XmMGgFW_j7PQV7zVHsY5AACNQEAAjDUnRG0uDX9ZqC2fDYE",
  options: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "Пройти тест", web_app: { url: "https://hackathon-front-rho.vercel.app/" } }],
      ],
    }),
  },
};
