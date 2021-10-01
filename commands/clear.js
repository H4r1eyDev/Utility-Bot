module.exports = {
    name: 'clear',
    description: "clear messages in a channel!",
    async execute(message, args, client, Discord) {
        if(client.config["moduleToggle"].clearChatCommand !== 'true') return message.channel.send("Command disabled via config.")

        if(!args[0]) return message.reply("Please enter the amount of messages you want to clear!");
        if(isNaN(args[0])) return message.reply("Please use a Number between 1-100!");

        if(args[0] > 100) return message.reply('You cant delete more than 100 messages! Please type a number between 1 and 100!');
        if(args[0] < 1) return message.reply("You cant delete negative numbers! Make sure to delete atleast 1 message!")

        if(message.member.roles.cache.has(client.config["permissionSetup"].allowedToClearMessages)){
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            const cleared = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} has purged chat`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor('#00edff')
            .setDescription(`**Action: **Purge\n**Amount Purged:** ${args[0]} message(s)\n**Purger ID:** ${message.author.id}\n**Purged By:** ${message.author.username}`)
            .setThumbnail(client.config["customConfig"].serverLogo)
            .setFooter(client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
            message.channel.send(cleared);

		const channel = client.channels.cache.get(client.config["loggingChannels"].clearMessagesCommandLogging);
        if (!channel) {
            console.log(`The channel ID for the SAY COMMAND is not set correctly. Please re-config.`)
        } else {
        const embed = new Discord.MessageEmbed()
            .setAuthor(`Clear Messages Command - New Entry`, client.config["customConfig"].serverLogo)
            .setColor(client.config["embedColours"].loggingEmbedColours)
            .setTimestamp()
            .setDescription(`**Command:** \`\`\`Clear Command\`\`\`\n**Command Used By:** \`\`\`${message.author.username} (${message.author.id})\`\`\`\n**Amount:** \`\`\`${args[0]} message(s).\`\`\``)
            .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        channel.send(embed).then(err => console.log(err))
        }
    }
        )}
    }
}
    