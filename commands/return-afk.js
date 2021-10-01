module.exports = {
    name: "return-afk",
    execute(message, args, client, Discord) {
        if(client.config["moduleToggle"].afkCommand !== 'true') return message.channel.send("Command Disabled Via Config.")
        const afk = new Discord.MessageEmbed()
        .setTitle(`I have removed your AFK ${message.author.username}`)
        .setColor(client.config["embedColours"].afkEmbedColour)
        .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        .setImage(`https://i.pinimg.com/originals/72/6e/57/726e574be1a8370f3d41f7d994da45f3.gif`);
        message.channel.send(afk);
        if (client.config["moduleToggle"].deleteCommands == 'true') {
            message.delete().catch(O_o => {});
        } else {
            return;
        }
    }
}