module.exports = {
    name: 'suggest',
    description: 'allows users to make suggestions',
    execute(message, args, client, Discord){
        if(client.config["moduleToggle"].suggestionCommand !== 'true') return message.channel.send("Command Disabled Via Config");
        if(message.channel.id !== client.config["customConfig"].suggestASuggestChannelID) return message.channel.send(`This is not the suggestions channel, it can be found here: <#${client.config["customConfig"].suggestASuggestChannelID}>`)

        const text = args.join(" ")
        if(!text) return message.channel.send("You must provide something to suggest!")


        const channels = client.channels.cache.get(client.config["customConfig"].suggestionChannelID);
        if(!channels) {
            console.log("Suggestion channel ID not set. Please check config.")
        } else {
        const suggest = new Discord.MessageEmbed()
        .setAuthor(`Suggestion From ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`\`\`\`${text}\`\`\``)
        .setColor(client.config["embedColours"].suggestionCommandColour)
        .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        channels.send(suggest).then(msg => {
            msg.react("👍"),
            msg.react("👎")
        }

           
        )

        const notify = new Discord.MessageEmbed()
        .setAuthor(`Thanks ${message.author.username} For the Suggestion!`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`Your Suggestion\n\`\`\`${text}\`\`\``)
        .setColor(client.config["embedColours"].suggestionCommandColour)
        .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        message.channel.send(notify).then(msg =>{
            msg.delete({ timeout: 5000 })
        })
        message.delete().catch(O_o=>{});
    }
    }
}