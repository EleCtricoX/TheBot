module.exports = {
	name: 'unpin',
	category: 'admin',
	description: 'Unpin a specific message to the channel.',
	usage: 'unpin <message_id>',
	run: async (bot, message, args) => {
		if(!message.member.hasPermission('MANAGE_MESSAGES')) {
			return message.channel.send(
				':x: Insufficient Permission! `MANAGE_MESSAGES` required.',
			);
		}

		if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) {
			return message.channel.send(
				':x: Insufficient Permission! `MANAGE_MESSAGES` required.',
			);
		}

		const msg = args[0];
		if(!msg || isNaN(msg)) {
			return message.channel.send(
				':x: Please provide a valid message.',
			);
		}
		try {
			message.channel.messages.fetch(msg)
				.then(pinned => {
					if(pinned.pinned) {
						pinned.unpin(msg);
						message.channel.send(
							`:white_check_mark: Successfully unpinned ${msg}`,
						).then(message.delete());
					}
					else {
						return message.channel.send(
							':x: That message is not pinned.',
						);
					}
				});
		}
		catch (e) {
			return message.channel.send(
				':x: An error occured, please try again!',
			);
		}
	},
};