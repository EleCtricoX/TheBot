const {
  unsetWelcomeChannel,
  unsetLeaveChannel,
  unsetAuditChannel,
  unsetWelcomeRole,
  unsetModLog,
} = require("../../utils/functions");

module.exports = {
  name: "reset",
  description: "Unset/disable an option",
  usage: "reset <option>",
  aliases: ["disable"],
  options: [
    "welcome-channel",
    "leave-channel",
    "audit-channel",
    "welcome-role",
    "mod-log",
  ],
  category: "admin",
 run:async (bot, message, args) => {
    const option = args[0].toLowerCase();

    if (!option) return message.channel.send("Please provide a valid option!");

    switch (option) {
      case "welcome-channel":
        unsetWelcomeChannel(message.guild.id);
        break;
      case "leave-channel":
        unsetLeaveChannel(message.guild.id);
        break;
      case "audit-channel":
        unsetAuditChannel(message.guild.id);
        break;
      case "welcome-role":
        unsetWelcomeRole(message.guild.id);
        break;
      case "mod-log":
        unsetModLog(message.guild.id);
        break;
      default:
        return message.channel.send(`\`${option}\` is not a valid option!`);
    }

    return message.channel.send(`Successfully disabled \`${option}\` `);
  },
};