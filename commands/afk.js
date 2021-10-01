module.exports = {
    name: "afk",
    execute(message, args, client, Discord) {
        if(client.config["moduleToggle"].afkCommand !== 'true') return message.channel.send("Command Disabled Via Config.")
        const afk = new Discord.MessageEmbed()
            .setTitle(`${message.author.username} I have set you as AFK!`)
            .setImage('https://c.tenor.com/FfQPpRvHkcQAAAAM/needy-cuddle.gif')
            .setColor(client.config["embedColours"].afkEmbedColour)
            .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        message.channel.send(afk);
        if (client.config["moduleToggle"].deleteCommands == 'true') {
            message.delete().catch(O_o => {});
        } else {
            return;
        }
    }
}