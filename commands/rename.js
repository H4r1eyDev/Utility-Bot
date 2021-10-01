module.exports = {
    name: "rename",
    execute(message, args, client, Discord) {
        if(client.config["moduleToggle"].ticketCommands !== 'true') return message.channel.send("Command disabled via config.");
        if(message.channel.parentID == client.config["ticketConfig"].ticketCatergory) {
        if(!message.member.roles.cache.has(client.config["ticketConfig"].ticketPermissions)) return message.channel.send("No permissions. If incorrect contact Development");


        if (client.config["moduleToggle"].deleteCommands == 'true') {
            message.delete().catch(O_o => {});
        } else {
            return;
        }

        const newName = `ticket-${args.join(" ")}`
        if(!newName) return message.channel.send("You must provide something to update the name to.");

        const embed = new Discord.MessageEmbed()
        .setAuthor(`Ticket Update.`, client.config["customConfig"].serverLogo)
        .setColor(client.config["ticketConfig"].renameColour)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`Ticket Update Detected.\n **Name:** ${message.channel.name}\n**Command used by:** ${message.author.id} (${message.author.id})\n**New Name:** ${newName}`)
        .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        message.channel.send(embed).then(msg => {
            msg.delete({ timeout: 5000 })
        });
        message.channel.setName(newName)
        if(client.config["ticketConfig"].ticketFunModules == 'true') {
            message.channel.send(`https://i.pinimg.com/originals/fe/11/1e/fe111e17715b7e9f54d336ec2236c64c.gif`).then(again => {
                again.delete({ timeout: 5000 })
            })

            const channels = client.channels.cache.get(client.config["loggingChannels"].ticketRenameCommandLogging);
            if (!channels) {
                console.log(`The channel ID for the TICKET RENAME COMMAND is not set correctly. Please re-config.`)
            } else {
            const embed = new Discord.MessageEmbed()
                .setAuthor(`Ticket Rename - New Entry`, client.config["customConfig"].serverLogo)
                .setColor(client.config["embedColours"].loggingEmbedColours)
                .setTimestamp()
                .setDescription(`**Command:** \`\`\`Ticket Rename Command\`\`\`\n**Command Used By:** \`\`\`${message.author.username} (${message.author.id})\`\`\`\n**Ticket Name** \`\`\`${message.channel.name} (${message.channel.id})\`\`\`\n**New Name:**\`\`\`${newName}\`\`\``)
                .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
            channels.send(embed).then(err => console.log(err))
            }
        } 
        } else {
            message.channel.send(`Command can only be ran in a ticket.`)
        }

        } 
    } 
