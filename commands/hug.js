module.exports = {
    name: "hug",
    execute(message, args, client, Discord) {
        if(client.config["moduleToggle"].hugCommand !== 'true') return message.channel.send("Command Disabled Via Config");
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!user) return message.channel.send(`\`\`❌\`\`| Cannot Find user.`);
        if (user == message.author.id) return message.channel.send("You cannot hug yourself.")
        const hug = new Discord.MessageEmbed()
            .setTitle(`${message.author.username} hugged ${user.user.username}`)
            .setDescription("💌")
            .setColor(client.config["embedColours"].hugEmbedColour)
            .setImage(`https://media0.giphy.com/media/1JmGiBtqTuehfYxuy9/200w.gif?cid=82a1493b6q0bep174548pm5gwha3qxwg76qa3frtbjrz3biz&rid=200w.gif&ct=g`)
            .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        message.channel.send(hug);
        if (client.config["moduleToggle"].deleteCommands == 'true') {
            message.delete().catch(O_o => {});
        } else {
            return;
        }
    }
}