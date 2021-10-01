module.exports = {
    name: "version",
    execute(message, args, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`Bot Version: 1.0`)
        .setDescription(`Can be Purchased at [here](https://discord.gg/ksv9GaZJ74)`)
        message.channel.send(embed)
    }
}