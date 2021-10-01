module.exports = {
    name: "announce",
    execute(message, args, client, Discord) {
        if(client.config["moduleToggle"].announceCommand !== 'true') return message.channel.send("Command Disabled via config.")
        if (message.member.roles.cache.has(client.config["permissionSetup"].allowedToAnnounce)) {
            const text = args.join(" ");
            if (!text) return message.channel.send(`You must provide some text to announce.`);

            const announcement = new Discord.MessageEmbed()
                .setAuthor(`Notification From ${message.author.username}`, message.author.displayAvatarURL({
                    dynmaic: true
                }))
                .setColor(client.config["embedColours"].announceEmbedColour)
                .setDescription(text)
                .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
            message.channel.send(announcement);
        } else {
            message.channel.send("No Permissions. If incorrect contact development.")
        }
        // end of the no permissions function. 
        if (client.config["moduleToggle"].deleteCommands == 'true') {
            message.delete().catch(O_o => {});
        } else {
            return;
        }
    }
}