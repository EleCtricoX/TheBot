const { owoify } = require('../../functions.js');

module.exports = {
	name: 'owoify',
	category: 'fun',
	description: 'OwOify a provided text.',
	aliases: [],
	usage: 'owoify <text>',
	run: async (client, message, args) => {
		const text = args.slice().join(' ');
		if(!text) {
			return message.channel.send(
				':x: Please provide valid text.',
			);
		}
		if(text.length > 2000) {
			return message.channel.send(':x: The provided message exceeds 2000 characters.');
		}

		message.channel.send(owoify(text));
	},
};