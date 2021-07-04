const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

module.exports = {
  name: "cry",
  category: "action",
  description: "Cry T_T",
  run: async (client, message, args) => {
    
    let data = await random.getAnimeImgURL("cry");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setDescription(`[Click here if the image failed to load](${data})`)
    .setFooter(message.author.username)
    .setColor("RANDOM")
    .setTitle(`${message.author.username} is crying!`)
    .setTimestamp()
    
    message.channel.send(embed);
  }
};