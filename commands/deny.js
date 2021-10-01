module.exports = {
    name: "deny",
    execute(message, args, client, Discord) {
        if(client.config["ticketConfig"].ticketMiscCommmand !== 'true') return message.channel.send("Misc Commmands for Tickets is not enabled.");
        if(!message.member.roles.cache.has(client.config["ticketConfig"].allowedToUseMiscCommands)) return message.channel.send("No Permissions. If incorrect contact development.");
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send(`\`\`❌\`\`| Cannot Find user.`);

        if(client.config["ticketConfig"].miscCommandsEmbeded == 'true') {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`Unfortunately Your Application has been denied.`, client.config["customConfig"].serverLogo)
            .setColor(client.config["embedColours"].denyCommandColour)
            .setDescription(`**${user.user.username}** Your application has been denied by **${message.author.username}**`)
            .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
            .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        } else {
            message.channel.send(`\`\`❌\`\`| **${user.user.username}** Your application was denied by **${message.author.username}**`);
        }


        const channel = client.channels.cache.get(client.config["loggingChannels"].deniedCommandLogging);
        if (!channel) {
            console.log(`The channel ID for the DENY COMMAND is not set correctly. Please re-config.`)
        } else {
        const embed = new Discord.MessageEmbed()
            .setAuthor(`Deny Command - New Entry`, client.config["customConfig"].serverLogo)
            .setColor(client.config["embedColours"].loggingEmbedColours)
            .setTimestamp()
            .setDescription(`**Command:** \`\`\`Deny Command\`\`\`\n**Command Used By:** \`\`\`${message.author.username} (${message.author.id})\`\`\`\n**User Denied:** \`\`\`${user.user.tag} (${user.user.id})\`\`\``)
            .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        channel.send(embed).then(err => console.log(err))
        }
    }
}