module.exports = {
    name: "wink",
    execute(message, args, client, Discord) {
        if(client.config["moduleToggle"].winkCommand !== 'true') return message.channel.send("Command disabled via config.")
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!user) return message.channel.send("User not found. Please try again. If error occurs again please contact development.")
        if (user == message.author.id) return message.channel.send("You cannot wink at yourself.")
        const kiss = new Discord.MessageEmbed()
            .setTitle(`${message.author.username} winked @ ${user.user.username}`)
            .setDescription("💌")
            .setColor(client.config["embedColours"].winkEmbedColour)
            .setImage(`https://c.tenor.com/gaiKIUG-zNoAAAAM/friends-joey-tribbiani.gif`)
            .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        message.channel.send(kiss);
        if (client.config["moduleToggle"].deleteCommands == 'true') {
            message.delete().catch(O_o => {});
        } else {
            return;
        }
    }
}