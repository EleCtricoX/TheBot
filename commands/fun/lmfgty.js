module.exports = {
  name: "lmgtfy",
  description: "Let me google that for you",
  category: "fun",
  usage: "lmgtfy <search query>",
 run: async (bot, message, args) => {
    const query = encodeURIComponent(args.join(" "));
    const url = `https://lmgtfy.com/?q=${query}&s=g`;

    message.channel.send(url);
  },
};