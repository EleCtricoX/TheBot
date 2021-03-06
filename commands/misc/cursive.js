const dictionary = require('../../assets/json/cursive.json');

module.exports = {
	name: 'cursive',
	category: 'misc',
	description: 'Converts text into πΈππππΎππ ππππ.',
	aliases: [],
	usage: 'cursive <message>',
	run: async (client, message, args) => {
		const text = args.slice().join(' ');
		if(!text) {
			return message.channel.send(
				'<:x:> Please provide valid text.',
			);
		}

		if(text.length > 2000) {
			return message.channel.send('<:x:> The provided message exceeds 2000 characters.');
		}

		const cursified = text.toLowerCase().split('').map(letter => {
			return `${dictionary[letter]}`;
		}).join('');

		message.channel.send(cursified);
	},
};