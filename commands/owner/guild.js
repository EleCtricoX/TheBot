const { MessageEmbed } = require('discord.js');
const { ownerID } = require("./config.json");

module.exports = {
	name: 'guilds',
	category: 'owner',
	description: 'Shows a list of servers that the bot is in.',
	aliases: ['servers'],
	usage: 'guilds',
	run: async (client, message, args) => {
		if(message.author.id !== ownerID) {
			return message.channel.send(
				':x: You must have the following permissions to use that: Bot Owner.',
			);
		}

		const list = client.guilds.cache.map(guild => `${guild.name} (${guild.id})`).join('\n');

		const botembed = new MessageEmbed()
			.setTitle(`${client.user.username}'s Server List`)
			.setDescription(list)
			.setFooter(`Total Servers: ${client.guilds.cache.size}`)
			.setColor('BLUE');
		message.channel.send(botembed);
	},
};