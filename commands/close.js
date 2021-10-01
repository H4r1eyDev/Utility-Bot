module.exports = {
    name: "close",
    execute(message, args, client, Discord){
        if(client.config["moduleToggle"].ticketCommands !== 'true') return message.channel.send("Command disabled via config.");
        if(message.channel.parentID == client.config["ticketConfig"].ticketCatergory){
            if(message.member.roles.cache.has(client.config["ticketConfig"].ticketPermissions)){

            const ticket_channel = message.channel.id;
            const channel = message.guild.channels.cache.get(ticket_channel);


        const closing = new Discord.MessageEmbed()
        .setAuthor(`Closure Confirmed, Ticket Closing`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setThumbnail(client.config["customConfig"].serverLogo)
        .setColor(client.config["ticketConfig"].closingColour)
        .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        .setDescription(`Thanks for Contacting Support of ${client.config["customConfig"].serverName}\n**Notice:**\n> You can always re-open a ticket if you have a issue!\n> It can take up to 5-8 seconds for this ticket to close!`)
        message.channel.send(closing)
        setTimeout(() => channel.delete(), 5000);
        if(client.config["ticketConfig"].ticketFunModules == 'true') {
            message.channel.send(`https://media2.giphy.com/media/dCj054Utb30RO/200.gif`)
        } else {
            return;
        }





        const channels = client.channels.cache.get(client.config["loggingChannels"].ticketClosingCommandLogging);
        if (!channels) {
            console.log(`The channel ID for the TICKET CLOSING COMMAND is not set correctly. Please re-config.`)
        } else {
        const embed = new Discord.MessageEmbed()
            .setAuthor(`Ticket Closure - New Entry`, client.config["customConfig"].serverLogo)
            .setColor(client.config["embedColours"].loggingEmbedColours)
            .setTimestamp()
            .setDescription(`**Command:** \`\`\`Ticket Close Command\`\`\`\n**Command Used By:** \`\`\`${message.author.username} (${message.author.id})\`\`\`\n**Ticket Name** \`\`\`${message.channel.name} (${message.channel.id})\`\`\``)
            .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        channels.send(embed).then(err => console.log(err))
        }


            }else{
                message.channel.send("No Permissions to close tickets!")
            }
        }else{
            message.channel.send("Command can only be ran in a ticket!")
        }
    }
}