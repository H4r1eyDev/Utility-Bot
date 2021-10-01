module.exports = {
    name: "say",
    execute(message, args, client, Discord) {
        if(client.config["moduleToggle"].sayCommand !== 'true') return message.channel.send("Command Disabled Via Config.")
        if (message.member.roles.cache.has(client.config["permissionSetup"].allowedToUseSay)) {
            const text = args.join(" ");
            if (!text) return message.channel.send(`You must provide something to say.`);
            message.channel.send(text);
            message.delete().catch(O_o => {});



            const channel = client.channels.cache.get(client.config["loggingChannels"].sayCommandLogging);
            if (!channel) {
                console.log(`The channel ID for the SAY COMMAND is not set correctly. Please re-config.`)
            } else {
            const embed = new Discord.MessageEmbed()
                .setAuthor(`Say Command - New Entry`, client.config["customConfig"].serverLogo)
                .setColor(client.config["embedColours"].loggingEmbedColours)
                .setTimestamp()
                .setDescription(`**Command:** \`\`\`Say Command\`\`\`\n**Command Used By:** \`\`\`${message.author.username} (${message.author.id})\`\`\`\n**Message:** \`\`\`${text}\`\`\``)
                .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
            channel.send(embed).then(err => console.log(err))
            }
        }
    }
}