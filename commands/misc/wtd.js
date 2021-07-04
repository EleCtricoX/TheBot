const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
const { capitalizeFirstLetter } = require('../../functions.js');

module.exports = {
	name: 'whattodo',
	category: 'misc',
	description: 'Feeling bored? Get some activities to do.',
	aliases: ["wtd"],
	usage: 'whattodo',
	run: async (client, message, args) => {
		const url = 'https://www.boredapi.com/api/activity/';

		let response;
		try {
			response = await fetch(url).then(res => res.json());
		}
		catch (e) {
			return message.channel.send('<:vError:725270799124004934> An error occured, please try again!');
		}

		const embed = new MessageEmbed()
			.setColor('BLUE')
			.setTitle('You should...')
			.setDescription(response.activity)
			.addField('Category', capitalizeFirstLetter(response.type), true)
			.addField('Participants', response.participants, true)
			.setFooter(`Requested by ${message.author.tag}`)
			.setTimestamp();

		message.channel.send(embed);
	},
};