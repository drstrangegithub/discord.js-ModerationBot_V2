const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  name: "badge",
  aliases: ["icon", "pfp"],
  description: "Show Member HypeSquad Badge",
  usage: "Badge | <Mention Member>",
  run: async (client, message, args) => {
        const user = message.mentions.users.first() || message.author;

        const flags = user.flags.toArray();

        console.log(flags);
        
        message.channel.send(`**${user}'s badges: ${flags.join(', ')}**`)
    }
}