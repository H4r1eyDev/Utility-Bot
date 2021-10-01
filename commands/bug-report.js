module.exports = {
    name: 'bug-report',
    execute(message, args, client, Discord){
        if(client.config["moduleToggle"].bugReportCommand !== 'true') return message.channel.send("Command Disabled Via Config");

        const text = args.join(" ")
        if(!text) return message.channel.send("You must provide some text to report.")


        const channels = client.channels.cache.get(client.config["customConfig"].bugReportsChannelID);
        if(!channels) {
            console.log("Bug reports channel ID not set. Please check config.")
        } else {
        const bugReport = new Discord.MessageEmbed()
        .setAuthor(`Bug Report From ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`\`\`\`${text}\`\`\``)
        .setColor(client.config["embedColours"].bugReportColour)
        .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        channels.send(bugReport)

        const notify = new Discord.MessageEmbed()
        .setAuthor(`Thanks ${message.author.username} For the Report`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`Your Bug Report\n\`\`\`${text}\`\`\``)
        .setColor(client.config["embedColours"].bugReportColour)
        .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        message.channel.send(notify).then(msg =>{
            msg.delete({ timeout: 5000 })
        })
        message.delete().catch(O_o=>{});
    }
    }
}