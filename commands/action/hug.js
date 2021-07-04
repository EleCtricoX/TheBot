const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "hug",
  description: "Hug someone and make their day ^_^",
  category: "action",
  usage:"hug @user",
 run: async (bot, message) =>{
    const data = await fetch("https://nekos.life/api/hug").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const hugged = message.author.id === user.id ? "themselfs" : user.username;

    const embed = new MessageEmbed()
      .setTitle(`${message.author.username} Hugged ${hugged}`)
      .setFooter(message.author.username)
      .setColor("BLUE")
      .setDescription(`[Click here if the image failed to load.](${data.url})`)
      .setImage(`${data.url}`)
      .setTimestamp();

    message.channel.send(embed);
  },
};