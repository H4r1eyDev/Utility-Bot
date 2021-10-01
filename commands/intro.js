module.exports = {
    name: "intro",
    execute(message, args, client, Discord) {
        if(client.config["ticketConfig"].ticketMiscCommmand !== 'true') return message.channel.send(`This command is disabled via the config.`);
        if(message.member.roles.cache.has(client.config["ticketConfig"].allowedToUseMiscCommands)) {


            if(client.config["moduleToggle"].deleteCommands == 'true') {
                message.delete()
            } else {
                return;
            }

            const embed1 = new Discord.MessageEmbed()
            .setDescription(`**Hello! How can we assist you? - <@${message.author.id}> (${message.author.id})**`)
            .setColor(client.config["embedColours"].introColour)
            .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
            message.channel.send(embed1).then(introc => {
                introc.react("👋")
            })
            if(client.config["ticketConfig"].ticketFunModules == 'true') {
                message.channel.send(client.config["ticketConfig"].introGiforImage);
            } else {
                return;
            }


            const channels = client.channels.cache.get(client.config["loggingChannels"].ticketIntroCommandLogging);
            if (!channels) {
                console.log(`The channel ID for the TICKET INTRO COMMAND is not set correctly. Please re-config.`)
            } else {
            const embed = new Discord.MessageEmbed()
                .setAuthor(`Ticket Introduce - New Entry`, client.config["customConfig"].serverLogo)
                .setColor(client.config["embedColours"].loggingEmbedColours)
                .setTimestamp()
                .setDescription(`**Command:** \`\`\`Ticket Introduce Command\`\`\`\n**Command Used By:** \`\`\`${message.author.username} (${message.author.id})\`\`\`\n**Ticket / Channel  Name** \`\`\`${message.channel.name} (${message.channel.id})\`\`\``)
                .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
            channels.send(embed).then(err => console.log(err))
            }


        } else {
            message.channel.send(`No Permissions.`)
        }
    }
}