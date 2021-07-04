const { ownerID } = require("./config.json");

module.exports = {
	name: 'restart',
	category: 'owner',
	description: 'Restarts the bot.',
	aliases: ['reload'],
	usage: 'restart',
	run: async (client, message, args) => {
		if(message.author.id !== ownerID) {
			return message.channel.send(
				':x: You must have the following permissions to use that: Bot Owner.',
			);
		}
		else{
			try {
				message.channel.send('Restarting...').then(msg => msg.delete({ timeout: 300 }))
					.then(() => client.destroy())
					.then(() => client.login('NzE3ODI4ODEwNTA2MTA4OTg4.XtgALQ.9NOHreUAPc5ty5X6HvSWNEdeve4'))
					.then(() => client.user.setActivity(`I have ${client.guilds.cache.size} Servers | ${client.channels.cache.size} Channels | ${client.users.cache.size} Users`, { type: 'WATCHING' }))
					.then(() => message.channel.send('Restart Successful'));
			}
			catch(e) {
				message.channel.send(`ERROR: ${e.message}`);
			}
		}

	},
};