const ms = require('ms');
module.exports = {
    name: 'unban-everyone',
    description: 'Unban all users in the current server.',
    async execute(message, args, client, Discord) {
        message.delete().catch(O_o => {});
        try {
            if (message.author.id == message.guild.owner.user.id) {
                const someembedlol = new Discord.MessageEmbed()
                    .setColor(client.config["embedColours"].unbanEmbedColour)
                    .setTitle(`Please Confirm Your Action!`)
                    .setDescription(`Before confirming, please remember you cannot undo this!\n\n**Do you still wish to continue?**\n✅ - Yes, I want to proceed.\n❌ - No, I don't wish to proceed.`)
                    .setThumbnail(`${client.user.displayAvatarURL({dynamic: true})}`)
                    .setTimestamp()
                    .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)

                message.channel.send(someembedlol).then(balls => {
                    balls.react('✅').then(() => balls.react('❌'));
                    const johncena = (reaction, user) => {
                        return ['✅', '❌'].includes(reaction.emoji.name) && user.bot == false;
                    };
                    balls.awaitReactions(johncena, {
                        max: 1,
                        time: ms("25m")
                    }).then(collected => {
                        const react23847 = collected.first();
                        if (react23847.emoji.name === '✅') {
                            message.channel.send(`Outstanding. We are starting the process.`).then(msg => {
                                msg.delete({
                                    timeout: 10000
                                })
                                balls.delete()
                                message.delete()
                            })
                            setTimeout(() => {

                                message.guild.fetchBans().then(bans => {
                                    if (bans.size == 0) {
                                        message.reply("There are no banned users within this guild!");
                                        throw "No members to unban."
                                    };
                                    bans.forEach(ban => {
                                        message.guild.members.unban(ban.user.id);
                                    })
                                }).then(() => console.log("Users are being unbanned from this guild!.")).catch(e => console.log(e))

                            }, 6000);
                        }
                        if (react23847.emoji.name === '❌') {
                            return message.channel.send(`Alrighty, stopping the process.`).then(msg => {
                                msg.delete({
                                    timeout: 10000
                                })
                                balls.delete()
                                message.delete()
                            })
                        }
                    })
                })
            } else {
                message.channel.send(`Only the guild owner may use this command...`).catch(e => {
                    return console.log(e);
                });
            }
        } catch (e) {
            console.log(e)
        }

    },
}