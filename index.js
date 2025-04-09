require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

const options = [
  {
    name: "YouTube",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg",
    link: "https://youtube.com"
  },
  {
    name: "Instagram",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    link: "https://instagram.com"
  },
  {
    name: "TikTok",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/69/TikTok_logo.svg",
    link: "https://tiktok.com"
  },
  {
    name: "Telegram",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
    link: "https://telegram.org"
  }
];

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  options.forEach((option) => {
    bot.sendPhoto(chatId, option.image, {
      caption: `${option.name} için butona tıkla:`,
      reply_markup: {
        inline_keyboard: [
          [{ text: option.name, url: option.link }]
        ]
      }
    });
  });
});
