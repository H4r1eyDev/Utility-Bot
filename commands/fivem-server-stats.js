const Gamedig = require('gamedig')
module.exports = {
  name: "fivem-server-stats",
  execute(message, args, client, Discord) {
    if (client.config["moduleToggle"].fivemCommands !== 'true') return message.channel.send(`Command Disabled Via Config`);
    if (client.config["moduleToggle"].deleteCommands) {
      message.delete();
    }
    Gamedig.query({
      type: 'fivem',
      host: client.config["fivemConfig"].serverIP, // This needs to be a string
      port: client.config["fivemConfig"].serverPort // This needs to be a number & is optional, unless you're not using the default port for that gameserver type
    }).then((state) => {
      let embed = new Discord.MessageEmbed()
        .setTitle(`Server Stats for ${client.config["fivemConfig"].serverName}!`)
        .setDescription(`**Full Name:** ${state.name}\n\n**Map:** ${state.map}\n**Connected Count:** ${state.raw.clients}\n**Max Players:** ${state.maxplayers}\n**Server Ping:** ${state.ping}\n**Connection Code:** ${state.connect}`)
        .setTimestamp()
        .setColor(client.config["embedColours"].fivemCommandsColour)
        .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
      message.channel.send(embed)
    }).catch((error) => {
      message.channel.send(`Server offline or not found.`);
    });
  }
}