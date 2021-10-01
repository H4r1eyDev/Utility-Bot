module.exports = {
    name: 'dice',
    description: 'A command.',
    async execute(message, args, client, Discord) {
        if (client.config["moduleToggle"].diceCommand !== 'true') return message.channel.send(`Command Disabled Via Config.`)
        var response = [Math.floor(Math.random() * ((100 - 1) + 1) + 1)];

        const embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} Your random number is .. `)
            .setColor(client.config["embedColours"].diceCommandColour)
            .setImage(`https://c.tenor.com/YfLnhkuHzzAAAAAM/dice-roll.gif`)
            .setDescription(`**Number:**\n${response}`)
            .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        message.channel.send(embed);
        if (client.config["moduleToggle"].deleteCommands == 'true') {
            message.delete().catch(O_o => {});
        } else {
            return;
        }
    }
}