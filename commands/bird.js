const axios = require('axios');

module.exports = {
	name: 'bird',
	category: 'animals',
	async execute(message, args, client, Discord) {
        if (client.config["moduleToggle"].funCommands !== 'true') return message.channel.send(`\`\`❌\`\`| Command Disabled Via Config`);
		const url = 'https://some-random-api.ml/img/birb';
		const facts = 'https://some-random-api.ml/facts/birb';

		let image; let
			response;
		let fact; let
			responses;
		try {
			response = await axios.get(url);
			image = response.data;

			responses = await axios.get(facts);
			fact = responses.data;
		} catch (e) {
			return message.channel.send('An error occured, please try again!');
		}

		const embed = new Discord.MessageEmbed()
			.setTitle('Here is your image and fact of a bird.')
			.setColor(client.config["embedColours"].birdCommandColour)
			.setDescription(fact.fact)
			.setImage(image.link)
            .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo);

		return message.channel.send(embed);
	},
};