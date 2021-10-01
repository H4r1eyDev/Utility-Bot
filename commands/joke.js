const Discord = require('discord.js');
const oneLinerJoke = require('one-liner-joke');

module.exports = {
    name: "joke",
    execute(message, args, client, Discord){
        if(client.config["moduleToggle"].jokeCommand !== 'true') return message.channel.send("Command Disabled Via Config");
        var joke = oneLinerJoke.getRandomJoke();
        message.channel.send({embed: {
        color: client.config["embedColours"].jokeCommandColour,
        description: joke.body,
        footer: `© ${client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo}`,
        image: 'https://c.tenor.com/ASGuOCPGrKEAAAAd/kekw-kek.gif'
      }});
}
}
