module.exports = {
    name: 'poll',
    description: 'allows users to make suggestions',
    execute(message, args, client, Discord){
        if(client.config["moduleToggle"].pollCommand !== 'true') return message.channel.send("Command Disabled Via Config");
        if(!message.member.roles.cache.has(client.config["permissionSetup"].allowedToMakePolls)) return message.channel.send("No Permissions. If incorrect, contact development.")

        const text = args.join(" ")
        if(!text) return message.channel.send("You must provide text to make a poll.")


        const channels = client.channels.cache.get(client.config["customConfig"].pollChannelID);
        if(!channels) {
            console.log("Poll channel ID not set. Please check config.")
        } else {
        const poll = new Discord.MessageEmbed()
        .setAuthor(`Poll From ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`\`\`\`${text}\`\`\``)
        .setColor(client.config["embedColours"].pollCommandColour)
        .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        channels.send(poll).then(msg => {
            msg.react("👍"),
            msg.react("👎")
        }

           
        )

        const notify = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username} Your poll has been sent!`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`Your Poll\n\`\`\`${text}\`\`\``)
        .setColor(client.config["embedColours"].pollCommandColour)
        .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        message.channel.send(notify).then(msg =>{
            msg.delete({ timeout: 5000 })
        })
        message.delete().catch(O_o=>{});
    }
    }
}