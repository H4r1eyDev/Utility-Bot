module.exports = {
    name: "credits",
    execute(message, args, client, Discord) {
        if(client.config["moduleToggle"].deleteCommands == 'true') {
            message.delete()
        } else {
            return;
        }
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.tag}'s Original Developers.`)
        .setColor(client.config["embedColours"].creditColour)
        .setDescription(`[@H4r1eyDev](https://discord.gg/ksv9GaZJ74) - Main Programmer\n[@Hani](https://discord.gg/92NTQBRZzj) - Testing Commands`)
        .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        message.channel.send(embed)
    }
}