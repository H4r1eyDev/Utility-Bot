module.exports = {
    name: "invite",
    execute(message, args, client, Discord) {
        if(client.config["moduleToggle"].discordInviteCommand !== 'true') return message.channel.send(`Command disabled via config.`)
        const invite = client.config["customConfig"].discordServerInvite;
        if(!invite) return console.log(`Discord Invite Link invalid. Please re-enter the server invite.`)

        message.channel.send(invite);
    }
}