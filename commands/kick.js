module.exports = {
    name: "kick",
    execute(message, args, client, Discord) {
        if (client.config["moduleToggle"].kickCommand !== 'true') return message.channel.send(`\`\`❌\`\`| Command Disabled Via Config`);
        if (!message.member.roles.cache.has(client.config["permissionSetup"].allowedToKick)) return message.channel.send(`\`\`❌\`\`| No Permissions`);
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!user) return message.channel.send(`\`\`❌\`\`| Cannot Find user.`);
        const text = args.splice(1).join(' ');
        if (!text) return message.channel.send(`\`\`❌\`\`| You must provide a reason for kicking the user`);

        message.channel.send(`\`\`✅\`\`| <@${user.user.id}> (**${user.user.username}**) has been __kicked__ for **${text}** by **${message.author.username}**`);
        user.kick();

        const channel = client.channels.cache.get(client.config["loggingChannels"].kickCommandLogging);
        if (!channel) {
            console.log(`The channel ID for the KICK COMMAND is not set correctly. Please re-config.`)
        } else {
            const embed = new Discord.MessageEmbed()
                .setAuthor(`Kick Command - New Entry`, client.config["customConfig"].serverLogo)
                .setColor(client.config["embedColours"].loggingEmbedColours)
                .setTimestamp()
                .setDescription(`**Command:** \`\`\`Kick Command\`\`\`\n**Command Used By:** \`\`\`${message.author.username} (${message.author.id})\`\`\`\n**User Kicked:** \`\`\`${user.user.tag} (${user.user.id})\`\`\`\n**Reason** \`\`\`${text}\`\`\``)
                .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
            channel.send(embed).then(err => console.log(err))
            if (client.config["moduleToggle"].deleteCommands == 'true') {
                message.delete().catch(O_o => {});
            } else {
                return;
            }
        }
    }
}