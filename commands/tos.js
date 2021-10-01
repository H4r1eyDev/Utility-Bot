module.exports = {
    name: 'tos',
    description: 'A command.',
    async execute(message, args, client, Discord){
        if(client.config["moduleToggle"].tosCommand !== 'true') return message.channel.send("Command Disabled Via Config.")

        message.delete().catch(O_o => {});

            const per = client.config["permissionSetup"].tosCommandAccess
            if(message.member.roles.cache.some(h=>per.includes(h.id))){
                const tosEmbed = new Discord.MessageEmbed()
                .setColor(client.config["embedColours"].tosColour)
                .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true})}`, `${client.config["customConfig"].discordServerInvite}`)
                .setThumbnail(client.config["customConfig"].serverLogo)
                .addFields(
                    { name: 'Terms Of Service:', value: `**[Click Me](${client.config["customConfig"].tosLink})**`},
                    { name: 'Notice:', value: 'If you type `I do not accept` then we have the right to deny your purchase/offer.'},
                    { name: 'Notice:', value: 'Please type `"I accept"` to accept the terms of service.'},
                )
                .setTimestamp()
                .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
                
                message.channel.send(tosEmbed)

    } else {
		message.channel.send("No Permissions. If incorrect contact development").then(msg => msg.delete({ timeout: 9000 }))
	}
    }
}