const { Message } = require('discord.js')

module.exports = {
  name: "unmute",
  aliases: ["u"],
  description: "Unmute!!",
  usage: "Unmute <Mention Member>",
  run: async (client, message, args) => {

    run : async(client, message, args) => {
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!Member) return message.channel.send('**Member not found**')

        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

        await Member.roles.remove(role)

        message.channel.send(`**${Member.displayName} is now unmuted successfully**`)
    }
}
}
