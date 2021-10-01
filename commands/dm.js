module.exports = {
    name: "dm",
    execute(message, args, client, Discord) { 
        if(client.config["moduleToggle"].dmCommand !== 'true') return message.channel.send("Command disabled via config.")
        if(message.member.roles.cache.has(client.config["permissionSetup"].allowedToUseDMCommand))
        message.delete().catch(O_o => {});
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send(`\`\`❌\`\`| Cannot Find user.`);
        const fortnite = args.splice(1).join(' ');
        if(!fortnite) return user.user.send("Please state something to say!");
       user.user.send(fortnite).catch(err => console.log(`Error. Could not send the message to that user. More information: ${err}`))

        const channel = client.channels.cache.get(client.config["loggingChannels"].dmCommandLogging);
        if (!channel) {
            console.log(`The channel ID for the SAY COMMAND is not set correctly. Please re-config.`)
        } else {
        const embed = new Discord.MessageEmbed()
            .setAuthor(`DM Command - New Entry`, client.config["customConfig"].serverLogo)
            .setColor(client.config["embedColours"].loggingEmbedColours)
            .setTimestamp()
            .setDescription(`**Command:** \`\`\`DM Command\`\`\`\n**Command Used By:** \`\`\`${message.author.username} (${message.author.id})\`\`\`\n**Sent To:** \`\`\`${user.user.tag} (${user.user.id})\`\`\`\n**Message:** \`\`\`${fortnite}\`\`\``)
            .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        channel.send(embed).then(err => console.log(err))
        }
    }
}