module.exports = {
    name: "warn",
    execute(message, args, client, Discord){
        if(message.member.roles.cache.has(client.config["permissionSetup"].allowedToWarn)){
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send(`\`\`❌\`\`| Cannot Find user.`);
        const m = args.splice(1).join(' ')
        if(!m) return message.channel.send("You must provide a reason!")

        const embed = new Discord.MessageEmbed()
        .setAuthor(`User ${user.user.username} has Been Warned!`, user.user.displayAvatarURL({ dynamic: true }))
        .setColor(client.config["embedColours"].warnEmbedColour)
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`Action: **Warn**\nReason: **${m}**\nUser ID: **${user.user.id}**\nWarned By: **${message.author.username}**`)
        .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        message.channel.send(embed)

        const channel = client.channels.cache.get(client.config["loggingChannels"].warnCommandLogging);
        if (!channel) {
            console.log(`The channel ID for the WARN COMMAND is not set correctly. Please re-config.`)
        } else {
        const embed = new Discord.MessageEmbed()
            .setAuthor(`Warn - New Entry`, client.config["customConfig"].serverLogo)
            .setColor(client.config["embedColours"].loggingEmbedColours)
            .setTimestamp()
            .setDescription(`**Command:** \`\`\`Warn Command\`\`\`\n**Command Used By:** \`\`\`${message.author.username} (${message.author.id})\`\`\`\n**Reason** \`\`\`${m}\`\`\``)
            .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        channel.send(embed).then(err => console.log(err))
        }


      }else{
        message.channel.send("You do not have the required Roles to do this! ``H4r1ey``, ``Moderator`` or ``Head Mod``!")
      }
    }
}