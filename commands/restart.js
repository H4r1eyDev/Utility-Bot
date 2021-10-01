module.exports = {
    name: 'restart',
    description: 'Reboot the Discord bot.',
    aliases: ['reboot'],
    async execute(message, args, client, Discord){
        if(client.config["moduleToggle"].restartBotCommand !== 'true') return message.channel.send(`Command Disabled Via Config`);

        if(message.author.id == client.config["customConfig"].botOwnerID) {

            const token = client.token;
            message.channel.send(`Restarting...`);

            client.destroy()
            client.login(token);
            
            setTimeout(function() {
                message.channel.send(`I've restarted.`);
                message.delete().catch(e => {})
            }, 6000)

        } else {
            message.channel.send(`No Permissions.`);
        }
    }
}
