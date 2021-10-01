const Discord = require('discord.js');
const client = new Discord.Client({
	partials: ["MESSAGE", "CHANNEL", "REACTION"]
});
client.config = require("./config.json");
const fs = require('fs');
const nodelogger = require('hyperz-nodelogger');

prefix = client.config["main"].botPrefix

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

client.once('ready', () => {
	client.user.setActivity(client.config["main"].botStatus, {
		type: client.config["main"].botPresence
	});
	const logger = new nodelogger()
	logger.hypelogger(`${client.user.tag}`, '800', 'blue', `I am online and running!\n\nH4r1eyDev Utils`, 'disabled', 'blue', 'double', false)

});

var _0x2683=["\x6D\x65\x73\x73\x61\x67\x65","\x64\x69\x73\x63\x6F\x72\x64\x2E\x67\x67\x2F","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x64\x69\x73\x63\x6F\x72\x64\x49\x6E\x76\x69\x74\x65\x42\x79\x70\x61\x73\x73","\x63\x75\x73\x74\x6F\x6D\x43\x6F\x6E\x66\x69\x67","\x63\x6F\x6E\x66\x69\x67","\x68\x61\x73","\x63\x61\x63\x68\x65","\x72\x6F\x6C\x65\x73","\x6D\x65\x6D\x62\x65\x72","\x69\x64","\x63\x68\x61\x6E\x6E\x65\x6C","\x63\x68\x61\x6E\x6E\x65\x6C\x41\x6C\x6C\x6F\x77\x65\x64\x54\x6F\x50\x6F\x73\x74\x49\x6E\x76\x69\x74\x65\x73","\x64\x65\x6C\x65\x74\x65","\xA9\x20","\x73\x65\x72\x76\x65\x72\x43\x6F\x70\x79\x72\x69\x67\x68\x74","\x73\x65\x72\x76\x65\x72\x4C\x6F\x67\x6F","\x73\x65\x74\x46\x6F\x6F\x74\x65\x72","\x64\x65\x6C\x65\x74\x65\x64\x44\x69\x73\x63\x6F\x72\x64\x49\x6E\x76\x69\x74\x65\x43\x6F\x6C\x6F\x75\x72","\x65\x6D\x62\x65\x64\x43\x6F\x6C\x6F\x75\x72\x73","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\x3C\x40","\x61\x75\x74\x68\x6F\x72","\x3E\x20\x2A\x2A\x28","\x29\x20\x50\x6C\x65\x61\x73\x65\x20\x64\x6F\x20\x6E\x6F\x74\x20\x70\x6F\x73\x74\x20\x69\x6E\x76\x69\x74\x65\x73\x20\x69\x6E\x20\x68\x65\x72\x65\x21\x2A\x2A","\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","","\x73\x65\x72\x76\x65\x72\x4E\x61\x6D\x65","\x27\x73\x20\x41\x6E\x74\x69\x20\x49\x6E\x76\x69\x74\x65\x20\x53\x79\x73\x74\x65\x6D","\x73\x65\x74\x54\x69\x74\x6C\x65","\x73\x65\x6E\x64","\x6F\x6E"];client[_0x2683[31]](_0x2683[0],async (_0x87f5x1)=>{const {guild,member,content}=_0x87f5x1;if(content[_0x2683[2]](_0x2683[1])){if(_0x87f5x1[_0x2683[9]][_0x2683[8]][_0x2683[7]][_0x2683[6]](client[_0x2683[5]][_0x2683[4]][_0x2683[3]])){return};if(_0x87f5x1[_0x2683[11]][_0x2683[10]]== client[_0x2683[5]][_0x2683[4]][_0x2683[12]]){return};_0x87f5x1[_0x2683[13]]();const _0x87f5x2= new Discord.MessageEmbed()[_0x2683[29]](`${_0x2683[26]}${client[_0x2683[5]][_0x2683[4]][_0x2683[27]]}${_0x2683[28]}`)[_0x2683[25]](`${_0x2683[21]}${_0x87f5x1[_0x2683[22]][_0x2683[10]]}${_0x2683[23]}${_0x87f5x1[_0x2683[22]][_0x2683[10]]}${_0x2683[24]}`)[_0x2683[20]](client[_0x2683[5]][_0x2683[19]][_0x2683[18]])[_0x2683[17]](_0x2683[14]+ client[_0x2683[5]][_0x2683[4]][_0x2683[15]],client[_0x2683[5]][_0x2683[4]][_0x2683[16]]);_0x87f5x1[_0x2683[11]][_0x2683[30]](_0x87f5x2)}})

if (client.config["moduleToggle"].welcomeMessages == 'true') {
	client.on('guildMemberAdd', async (member) => {
		const welcomec = member.guild.channels.cache.get(client.config["customConfig"].welcomeChannelID)
		const welcome = new Discord.MessageEmbed()
			.setThumbnail(member.user.displayAvatarURL({
				dynamic: true
			}))
			.setColor(client.config["embedColours"].welcomeColour)
			.setTimestamp()
			.setDescription(`User **${member.displayName} (${member.id})** Has Joined! Our New Member Count is ${member.guild.memberCount}\n\n**Notice:**\n ${client.config["customConfig"].welcomeNoticeMessage}`)
            .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
		welcomec.send(welcome)
	})
} else {
	return;
}

if (client.config["moduleToggle"].leaveMessages == 'true') {
	client.on('guildMemberRemove', async (member) => {
		const welcomed = member.guild.channels.cache.get(client.config["customConfig"].leaveChannelID)
		const welcomef = new Discord.MessageEmbed()
			.setThumbnail(member.user.displayAvatarURL({
				dynamic: true
			}))
			.setColor(client.config["embedColours"].welcomeColour)
			.setTimestamp()
			.setDescription(`User **${member.displayName} (${member.id})** Has Left! Our New Member Count is ${member.guild.memberCount}\n\n**Notice:**\n ${client.config["customConfig"].leaveNoticeMessage}`)
            .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
		welcomed.send(welcomef)
	})
} else {
	return;
}


client.on("message", (message) => {
	if(message.channel.type == "dm") {
		const dmEmbed = new Discord.MessageEmbed()
		.setAuthor(`Bot DM - New Entry`, client.config["customConfig"].serverLogo)
		.setColor(client.config["embedColours"].loggingEmbedColours)
		.setTimestamp()
		.setDescription(`**Command:** \`\`\`N/A Someone DM'd The Bot!\`\`\`\n**Command Used By:** \`\`\`${message.author.username} (${message.author.id})\`\`\`\n**Message:** \`\`\`${message.content}\`\`\``)
		.setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)

		const DMC = client.channels.cache.get(client.config["loggingChannels"].botDMLoggingChannel);
		DMC.send(dmEmbed);
		if(message.author.id == client.config["main"].botID) return;
		message.channel.send(`Your message has been logged and sent to the moderation team of ${client.config["customConfig"].serverName}`)
	}
})

if(client.config["moduleToggle"].pingPrevention == 'true') {	
	client.on("message", (message) => {
		if(message.member.roles.cache.has(client.config["customConfig"].allowedToBypassPingPrevention)) return;
		if(client.config["customConfig"].pingPreventionID == message.author.id) return;
		if(message.content.includes(client.config["customConfig"].pingPreventionID)) {
			message.delete()
			const embedbbb = new Discord.MessageEmbed()
			.setDescription(`<@${message.author.id}> **(${message.author.id}) Please do not ping me!**`)
			.setColor(client.config["embedColours"].pingPreventionColour)
			.setImage(client.config["customConfig"].pingPreventionImageorGif)
			.setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
			.setTimestamp()
			message.channel.send(embedbbb);
		}
	})
}

if(client.config["moduleToggle"].deleteSteamScamLinks == 'true') {
	client.on("message", (message) => {
		if(message.content.includes('ru') || message.content.includes('token')) {
		message.delete();
		const embed2 = new Discord.MessageEmbed()
		.setDescription(`<@${message.author.id}> **(${message.author.id}) Your message has been deleted for possible scam link!**`)
		.setColor(client.config["embedColours"].steamScamlinkPreventionColour)
		.setTimestamp()
		.setImage(client.config["customConfig"].steamScamLinkImageorGif)
		.setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
		message.channel.send(embed2)


		const channel = client.channels.cache.get(client.config["loggingChannels"].steamScamLinkLoggingChannels);
		if (!channel) {
			console.log(`The channel ID for the Scam Links Logger is not set correctly. Please re-config.`)
		} else {
			const embed = new Discord.MessageEmbed()
				.setAuthor(`Scam Link - New Entry`, client.config["customConfig"].serverLogo)
				.setColor(client.config["embedColours"].loggingEmbedColours)
				.setTimestamp()
				.setDescription(`**Message Author** \`\`\`${message.author.username}\`\`\`\n**Message Author ID** \`\`\`${message.author.id}\`\`\`\n**Message Content** \`\`\`DO NOT CLICK!\n${message.content}\`\`\``)
				.setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
			channel.send(embed).then(err => console.log(err))
		}
	}
	}
	)}

client.on('message', message => {
	if (!message.content.startsWith(client.config["main"].botPrefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		client.commands.get('ping').execute(message, args, client, Discord);
	} else if (command === 'avatar') {
		client.commands.get('avatar').execute(message, args, client, Discord);
	} else if (command === 'hug') {
		client.commands.get('hug').execute(message, args, client, Discord);
	} else if (command === 'kiss') {
		client.commands.get('kiss').execute(message, args, client, Discord);
	} else if (command === 'afk') {
		client.commands.get('afk').execute(message, args, client, Discord);
	} else if (command === 'return-afk') {
		client.commands.get('return-afk').execute(message, args, client, Discord);
	} else if (command === 'announce') {
		client.commands.get('announce').execute(message, args, client, Discord);
	} else if (command === 'say') {
		client.commands.get('say').execute(message, args, client, Discord);
	} else if (command === 'dm') {
		client.commands.get('dm').execute(message, args, client, Discord);
	} else if (command === 'clear') {
		client.commands.get('clear').execute(message, args, client, Discord);
	} else if (command === 'dice') {
		client.commands.get('dice').execute(message, args, client, Discord);
	} else if (command === 'invite') {
		client.commands.get('invite').execute(message, args, client, Discord);
	} else if (command === 'restart') {
		client.commands.get('restart').execute(message, args, client, Discord);
	} else if (command === 'unban-everyone') {
		client.commands.get('unban-everyone').execute(message, args, client, Discord);
	} else if (command === 'wink') {
		client.commands.get('wink').execute(message, args, client, Discord);
	} else if (command === 'tos') {
		client.commands.get('tos').execute(message, args, client, Discord);
	} else if (command === 'version') {
		client.commands.get('version').execute(message, args, client, Discord);
	} else if (command === 'joke') {
		client.commands.get('joke').execute(message, args, client, Discord);
	} else if (command === 'meme') {
		client.commands.get('meme').execute(message, args, client, Discord);
	} else if (command === 'suggest') {
		client.commands.get('suggest').execute(message, args, client, Discord);
	} else if (command === 'warn') {
		client.commands.get('warn').execute(message, args, client, Discord);
	} else if (command === 'poll') {
		client.commands.get('poll').execute(message, args, client, Discord);
	} else if (command === 'new') {
		client.commands.get('new').execute(message, args, client, Discord);
	} else if (command === 'close') {
		client.commands.get('close').execute(message, args, client, Discord);
	} else if (command === 'rename') {
		client.commands.get('rename').execute(message, args, client, Discord);
	} else if (command === 'add') {
		client.commands.get('add').execute(message, args, client, Discord);
	} else if (command === 'remove') {
		client.commands.get('remove').execute(message, args, client, Discord);
	} else if (command === 'bug-report') {
		client.commands.get('bug-report').execute(message, args, client, Discord);
	} else if (command === 'accept') {
		client.commands.get('accept').execute(message, args, client, Discord);
	} else if (command === 'deny') {
		client.commands.get('deny').execute(message, args, client, Discord);
	} else if (command === 'kick') {
		client.commands.get('kick').execute(message, args, client, Discord);
	} else if (command === 'ban') {
		client.commands.get('ban').execute(message, args, client, Discord);
	} else if (command === 'verify') {
		client.commands.get('verify').execute(message, args, client, Discord);
	} else if (command === 'fivem-server-stats') {
		client.commands.get('fivem-server-stats').execute(message, args, client, Discord);
	} else if (command === 'help') {
		client.commands.get('help').execute(message, args, client, Discord);
	} else if (command === 'credits') {
		client.commands.get('credits').execute(message, args, client, Discord);
	}  else if (command === 'botinfo') {
		client.commands.get('botinfo').execute(message, args, client, Discord);
	} else if (command === 'bird') {
		client.commands.get('bird').execute(message, args, client, Discord);
	} else if (command === 'cat') {
		client.commands.get('cat').execute(message, args, client, Discord);
	} else if (command === 'coronavirus-check') {
		client.commands.get('coronavirus-check').execute(message, args, client, Discord);
	} else if (command === 'outro') {
		client.commands.get('outro').execute(message, args, client, Discord);
	} else if (command === 'intro') {
		client.commands.get('intro').execute(message, args, client, Discord);
	}
});

var _0xb9a9=["\x6C\x69\x63\x65\x6E\x73\x65\x4B\x65\x79","\x6D\x61\x69\x6E","\x63\x6F\x6E\x66\x69\x67","\x33\x33\x32\x39\x32\x75\x75\x75\x37\x37\x32\x36\x32\x36\x36\x36\x32\x35\x35\x35\x32","\x62\x6F\x74\x54\x6F\x6B\x65\x6E","\x6C\x6F\x67\x69\x6E"];if(client[_0xb9a9[2]][_0xb9a9[1]][_0xb9a9[0]]== _0xb9a9[3]){client[_0xb9a9[5]](client[_0xb9a9[2]][_0xb9a9[1]][_0xb9a9[4]])}
