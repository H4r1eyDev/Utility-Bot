const axios = require('axios');

module.exports = {
	name: 'cat',
	category: 'animals',
	async execute(message, args, client, Discord) {
        if (client.config["moduleToggle"].funCommands !== 'true') return message.channel.send(`\`\`❌\`\`| Command Disabled Via Config`);
		const url = 'https://no-api-key.com/api/v1/animals/cat';

		let image;
		let fact;
		try {
			const { data } = await axios.get(url);
			console.log(data);
			image = data.image;
			fact = data.fact;
		} catch (e) {
			return message.channel.send('An error occured, please try again!');
		}

		const embed = new Discord.MessageEmbed()
			.setTitle('Random Cat Image and Fact')
			.setColor(client.config["embedColours"].catCommandColour)
			.setDescription(fact)
			.setImage(image)
            .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo);

		return message.channel.send(embed);
	},
};