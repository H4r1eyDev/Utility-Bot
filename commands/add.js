module.exports = {
    name: "add",
    execute(message, args, client, Discord) {
        if (client.config["moduleToggle"].ticketCommands !== 'true') return message.channel.send("Command is disabled via config.");
        if (message.channel.parentID == client.config["ticketConfig"].ticketCatergory) {
            if (!message.member.roles.cache.has(client.config["ticketConfig"].ticketPermissions)) return message.channel.send("No permissions. If incorrect contact Development");
            const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if (!user) return message.channel.send(`\`\`❌\`\`| Cannot Find user.`);

            message.channel.updateOverwrite(user, {
                SEND_MESSAGE: true,
                VIEW_CHANNEL: true,
            });


            const embed = new Discord.MessageEmbed()
                .setAuthor(`${user.user.username} Has Been Added Too The Ticket`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor(client.config["ticketConfig"].addMemberColour)
                .setDescription(`<@${user.user.id}> (${user.user.tag}) has been added to the ticket.\n\n**Notice:**\nPlease remain respectful within the ticket at all times!`)
                .setThumbnail(user.user.displayAvatarURL({
                    dynamic: true
                }))
                .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
            message.channel.send(embed).then(fortnite => {
                fortnite.delete({
                    timeout: 5000
                })
            })
            if (client.config["moduleToggle"].deleteCommands == 'true') {
                message.delete().catch(O_o => {});
            } else {
                return;
            }


            const channels = client.channels.cache.get(client.config["loggingChannels"].ticketAddMemberCommandLogging);
            if (!channels) {
                console.log(`The channel ID for the TICKET ADD MEMBER COMMAND is not set correctly. Please re-config.`)
            } else {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(`Ticket Add Member - New Entry`, client.config["customConfig"].serverLogo)
                    .setColor(client.config["embedColours"].loggingEmbedColours)
                    .setTimestamp()
                    .setDescription(`**Command:** \`\`\`Ticket Add Member Command\`\`\`\n**Command Used By:** \`\`\`${message.author.username} (${message.author.id})\`\`\`\n**Ticket Name** \`\`\`${message.channel.name} (${message.channel.id})\`\`\`\n**Member Added**\`\`\`${user.user.tag} (${user.user.id})\`\`\``)
                    .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
                channels.send(embed).then(err => console.log(err))
            }






        } else {
            message.channel.send("This can only be done in a ticket.")
        }
    }
}