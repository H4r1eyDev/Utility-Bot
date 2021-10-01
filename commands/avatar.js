module.exports = {
    name: "avatar",
    execute(message, args, client, Discord) {
        if(client.config["moduleToggle"].avatarCommand !== 'true') return message.channel.send("Command disabled via config.")
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new Discord.MessageEmbed()
            .setAuthor(`${user.user.username}'s Avatar`)
            .setColor(client.config["embedColours"].avatarEmbedColour)
            .setImage(user.user.displayAvatarURL({
                dynamic: true
            }))
            .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        message.channel.send(embed);
        if (client.config["moduleToggle"].deleteCommands == 'true') {
            message.delete().catch(O_o => {});
        } else {
            return;
        }
    }
}