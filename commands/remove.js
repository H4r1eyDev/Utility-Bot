module.exports = {
    name: "remove",
    execute(message, args, client, Discord){
        if(client.config["moduleToggle"].ticketCommands !== 'true') return message.channel.send("Command is disabled via config.");
        if(message.channel.parentID == client.config["ticketConfig"].ticketCatergory) {
        if(!message.member.roles.cache.has(client.config["ticketConfig"].ticketPermissions)) return message.channel.send("No permissions. If incorrect contact Development");
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send(`\`\`❌\`\`| Cannot Find user.`);

        message.channel.updateOverwrite(user, {
            SEND_MESSAGE: false,
            VIEW_CHANNEL: false,
          });


        const embed = new Discord.MessageEmbed()
        .setAuthor(`${user.user.username} Has Been Removed From The Ticket`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(client.config["ticketConfig"].removeMemberColour)
        .setDescription(`<@${user.user.id}> (${user.user.tag}) has been removed to the ticket.\n\n**Notice:**\nThe following user cannot read/see the ticket anymore. You may proceed..`)
        .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
        .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        message.channel.send(embed).then(fortnite => {
            fortnite.delete({ timeout: 5000 })
        })
        if (client.config["moduleToggle"].deleteCommands == 'true') {
            message.delete().catch(O_o => {});
        } else {
            return;
        }


        const channels = client.channels.cache.get(client.config["loggingChannels"].ticketRemoveMemberCommandLogging);
        if (!channels) {
            console.log(`The channel ID for the TICKET REMOVED MEMBER COMMAND is not set correctly. Please re-config.`)
        } else {
        const embed = new Discord.MessageEmbed()
            .setAuthor(`Ticket Remove Member - New Entry`, client.config["customConfig"].serverLogo)
            .setColor(client.config["embedColours"].loggingEmbedColours)
            .setTimestamp()
            .setDescription(`**Command:** \`\`\`Ticket Remove Member Command\`\`\`\n**Command Used By:** \`\`\`${message.author.username} (${message.author.id})\`\`\`\n**Ticket Name** \`\`\`${message.channel.name} (${message.channel.id})\`\`\`\n**Member Removed**\`\`\`${user.user.tag} (${user.user.id})\`\`\``)
            .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        channels.send(embed).then(err => console.log(err))
        }






    } else {
        message.channel.send("This can only be done in a ticket.")
    }
    }
}