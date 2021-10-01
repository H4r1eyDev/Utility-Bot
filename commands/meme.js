const axios = require('axios');

module.exports = {
    name: "meme",
    async execute(message, args, client, Discord) {
        if(client.config["moduleToggle"].memeCommand !== 'true') return message.channel.send("Command disabled via config.")
        const url = 'https://some-random-api.ml/meme';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error has occured, try again later!`)
        }

        const meme = new Discord.MessageEmbed()
            .setTitle(`${message.author.username} Here is your meme!`)
            .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)
            .setDescription(data.caption)
            .setColor(client.config["embedColours"].memeCommandColour)
            .setImage(data.image)

        message.channel.send(meme)
        message.delete().catch(O_o=>{});
    }
}