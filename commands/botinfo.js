const os = require('os');

module.exports = {
	name: 'botinfo',
	category: 'bot',
	async execute(message, args, client, Discord) {
		const embed = new Discord.MessageEmbed()
			.setThumbnail(client.user.displayAvatarURL())
			.setTitle('Bot Stats')
			.setColor(client.config["embedColours"].botinfoColour)
			.addFields(
				{
					name: 'Servers',
					value: `Serving ${client.guilds.cache.size} servers.`,
				},
				{
					name: 'Channels',
					value: `Serving ${client.channels.cache.size} channels.`,
				},
				{
					name: 'Server Users',
					value: `Serving ${client.users.cache.size}`,
				},
				{
					name: 'Ping',
					value: `${Math.round(client.ws.ping)}ms`,
				},
				{
					name: 'Join Date',
					value: client.user.createdAt,
				},
				{
					name: 'Server Info',
					value: `Cores: ${os.cpus().length}`,
				},
			)
            .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)

		return message.channel.send(embed);
	},
};