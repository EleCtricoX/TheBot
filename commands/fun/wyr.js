const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "wouldyourather",
    aliases:["wyr"],
    description: "Would you rather?! React with 1⃣ for first reason and 2⃣ for second reason!",
    category: "fun",
   run: async (bot, message) => {
        const replies = require("../../data/wouldYouRather.json");

        const reply = replies[Math.floor(Math.random() * replies.length)];

        const embed = new MessageEmbed()
            .setTitle("Would you rather?")
            .setColor("BLUE")
            .setDescription(`**${reply}**`)
            .setFooter(message.author.username);

       const wyr = await message.channel.send(embed);
     
    wyr.react ("1⃣");
    wyr.react("2⃣");
     
     
    },
};