const { ownerID } = require("./config.json");

module.exports = {
	name: 'dm',
	category: 'owner',
	description: 'Direct message a specified user as the bot.',
	aliases: ['message'],
	usage: 'dm <text>',
	run: async (client, message, args) => {
		if(message.author.id !== ownerID) {
			return message.channel.send(
				':x: You must have the following permissions to use that: Bot Owner.',
			);
		}

		const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]);
		if (!member) {
			return message.channel.send(
				':x: Please provide a valid user.',
			);
		}

		const text = args.slice(1).join(' ');
		if(!text) {
			return message.channel.send(
				':x: Please provide valid text.',
			);
		}

		try{
			member.send(text);
			await message.channel.send(
				 `:white_check_mark: Successfully DMed ${member.user.tag}.`,
			);
		}
		catch (e) {
			return message.channel.send(
				':x: An error occured, please try again!',
			);
		}
	},
};