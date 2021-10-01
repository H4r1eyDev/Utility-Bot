module.exports = {
  name: "ping",
  description: "Returns Latency and API Ping",
  timeout: 10000,
  async execute(message, args, client, Discord) {
    const Embed = new Discord.MessageEmbed()
      .setAuthor(`${message.author.username} Pinged ${client.user.tag}`, message.author.displayAvatarURL({
        dynamic: true
      }))
      .setDescription(
        `Ping Information\n **API Ping is:** ${Math.round(client.ws.ping)}\nPONG!`)
      .setColor(client.config["embedColours"].pingEmbedColour)
      .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
    message.channel.send(Embed);
    if (client.config["moduleToggle"].deleteCommands == 'true') {
      message.delete().catch(O_o => {});
    } else {
      return;
    }
  }
};