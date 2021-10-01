module.exports = {
    name: "new",
    description: "open a ticket!",
    async execute(message, args, client, Discord) {
        if(client.config["moduleToggle"].ticketCommands !== 'true') return message.channel.send("Command Disabled Via Config");
      const channel = await message.guild.channels.create(`ticket-${message.author.tag}`);
      const supportrole = client.config["ticketConfig"].ticketPermissions
      
  
      channel.setParent(client.config["ticketConfig"].ticketCatergory);
  
      channel.updateOverwrite(message.guild.id, {
        SEND_MESSAGE: false,
        VIEW_CHANNEL: false,
      });
      channel.updateOverwrite(message.author.id, {
        SEND_MESSAGE: true,
        VIEW_CHANNEL: true,
      });
      channel.updateOverwrite(supportrole, {
        SEND_MESSAGE: true,
        VIEW_CHANNEL: true,
      });


      const open = new Discord.MessageEmbed()
      .setAuthor(client.config["ticketConfig"].ticketHeading, client.config["customConfig"].serverLogo)
      .setColor(client.config["ticketConfig"].ticketEmbedColours)
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(client.config["ticketConfig"].ticketMessageSmall)
      .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
      channel.send(open)
      if(client.config["ticketConfig"].ticketFunModules) {
          channel.send(`https://i.pinimg.com/originals/d1/75/14/d17514e2c03ec6b0e67ba7f18439a011.gif`)
      }

        const opened = new Discord.MessageEmbed()
        .setAuthor(`Ticket Opened!`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(client.config["ticketConfig"].ticketEmbedColours)
        .setThumbnail(client.config["customConfig"].serverLogo)
        .setDescription(`You can find your new ticket here ${channel}.`)
        .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        message.channel.send(opened).then(msg => {
          msg.delete({ timeout: 5000 })
        })
        message.delete().catch(O_o=>{});
    },
  };
  