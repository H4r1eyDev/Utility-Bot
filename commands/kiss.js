module.exports = {
    name: "kiss",
    execute(message, args, client, Discord) {
        if(client.config["moduleToggle"].kissCommand !== 'true') return message.channel.send("Command disabled via config.")
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!user) return message.channel.send(`\`\`❌\`\`| Cannot Find user.`);
        if (user == message.author.id) return message.channel.send("You cannot kiss yourself.")
        const kiss = new Discord.MessageEmbed()
            .setTitle(`${message.author.username} kissed ${user.user.username}`)
            .setDescription("💌")
            .setColor(client.config["embedColours"].kissEmbedColour)
            .setImage(`https://c.tenor.com/9gsqEGVuaI4AAAAC/a-lovely-tuji-hug.gif`)
            .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        message.channel.send(kiss);
        if (client.config["moduleToggle"].deleteCommands == 'true') {
            message.delete().catch(O_o => {});
        } else {
            return;
        }
    }
}