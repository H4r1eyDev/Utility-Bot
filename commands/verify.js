module.exports = {
    name: "verify",
    execute(message, args, client, Discord) {
        if(client.config["moduleToggle"].verificationSystem !== 'true') return message.channel.send(`\`\`❌\`\`| Command Disabled Via Config`);
        const role = client.config["customConfig"].verifiedRoleID 
        if(!role) return message.channel.send(`\`\`❌\`\`| Role Finding error`).catch(console.error)
        if(client.config["moduleToggle"].deleteCommands) {
            message.delete()
        }


        const verificationChannel = client.config["customConfig"].verifyRunningChannelID;
        if(message.channel.id == verificationChannel) {

        if(message.member.roles.cache.has(role)) return message.channel.send(`\`\`❌\`\`| You are already verified!`)

        message.channel.send(`\`\`✅\`\`| You have verified within this guild!`).then(fortnite => {
            fortnite.delete({ timeout: 5000 })
        })
        message.member.roles.add(client.config["customConfig"].verifiedRoleID).catch(console.error);

        const channel = client.channels.cache.get(client.config["loggingChannels"].verifyCommandLogging);
        if (!channel) {
            console.log(`The channel ID for the VERIFY COMMAND is not set correctly. Please re-config.`)
        } else {
        const embed = new Discord.MessageEmbed()
            .setAuthor(`Verification Command - New Entry`, client.config["customConfig"].serverLogo)
            .setColor(client.config["embedColours"].loggingEmbedColours)
            .setTimestamp()
            .setDescription(`**Command:** \`\`\`Verifications Command\`\`\`\n**Command Used By:** \`\`\`${message.author.username} (${message.author.id})\`\`\``)
            .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
        channel.send(embed).then(err => console.log(err))
        }
    } else {
        message.channel.send(`\`\`❌\`\`| Incorrect channel for verification`)
    }

    }
}