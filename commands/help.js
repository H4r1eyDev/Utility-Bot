const pagination = require('discord.js-pagination')

module.exports = {
    name: 'help',
    execute(message, args, client, Discord){

        const page1 = new Discord.MessageEmbed()
        .setTitle('Bot Created By H4r1ey')
        .setTimestamp()
        .setColor(client.config["embedColours"].helpColour)
        .setThumbnail('https://images-ext-1.discordapp.net/external/PsM6TnAv5JKQpNMdC6yo-dRFgWHkBS6yL6CIwvTKN4c/https/media.discordapp.net/attachments/850042424423350272/850082023611695124/h44444.png')
        .addFields(
            {
                name: 'Bot Name:',
                value: 'H4r1eyUtil Bot',
                inline: true
            },
            {
                name: 'Prefix:',
                value: `${client.config["main"].botPrefix}`
            },
            {
                name: "Want to purchase me?",
                value: 'Want to purchase this exact bot? Then join the following Discord. https://discord.gg/ksv9GaZJ74'
            }
        )
        .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)

        const page2 = new Discord.MessageEmbed()
        .setTitle('Page 1')
        .setColor(client.config["embedColours"].helpColour)
        .addFields(
            {
                name: '> accept (user)',
                value: 'Accepts people!'
            },
            {
                name: '> add (user)',
                value: 'Adds people to a ticket.'
            },
            {
                name: '> afk',
                value: 'Displays you as AFK'
            },
            {
                name: '> announce',
                value: 'Allows you to make announcements'
            },
            {
                name: '> avatar (user)',
                value: 'Displays the users avatar'
            },
            {
                name: '> ban (user) (reason)',
                value: 'Bans people from the guild'
            },
            {
                name: '> bug-report (bug-report)',
                value: 'Allows people to make bug reports.'
            },
            {
                name: '> return-afk',
                value: 'Allows you to return from AFK'
            },
            {
                name: '> tos',
                value: 'Allows people to view/accept the TOS'
            },
            {
                name: '> version',
                value: 'Allows people to check thier bot version'
            },
            {
                name: '> bird',
                value: 'Displays an image and fun fact of a bird.'
            },
            {
                name: '> outro',
                value: 'Displays the outro command for tickets.'
            }
        )
        .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)

        const page3 = new Discord.MessageEmbed()
        .setTitle('Page 2')
        .setColor(client.config["embedColours"].helpColour)
        .addFields(
            {
                name: '> clear (amount of messages)',
                value: 'Clears the stated amount of messages'
            },
            {
                name: '> close',
                value: 'Closes the ticket'
            },
            {
                name: '> deny (user)',
                value: 'Allows you to deny people'
            },
            {
                name: '> dice',
                value: `Spits out a random number`
            },
            {
                name: '> dm (user) (message)',
                value: 'Allows people to dm other people as the bot'
            },
            {
                name: '> fivem-server-stats',
                value: 'Displays the FiveM server information'
            },
            {
                name: '> help',
                value: 'Displays the current screen'
            },
            {
                name: '> hug (user)',
                value: 'Hugs the stated person'
            },
            {
                name: '> invite',
                value: 'Displays the invite for the server'
            },
            {
                name: '> restart',
                value: 'Allows the owner to restart the bot'
            },
            {
                name: '> suggest (suggestion)',
                value: 'Allows people to make suggestions'
            },
            {
                name: '> verify',
                value: 'Allows people to verify'
            },
            {
                name: '> wink (user)',
                value: 'Winks at the stated person'
            },
            {
                name: '> cat',
                value: 'Displays a fun fact and image of a cat.'
            },
            {
                name: '> intro',
                value: 'Allows the intro command for introducing via tickets.'
            }
        )
        .setFooter("© " + client.config["customConfig"].serverCopyright, client.config["customConfig"].serverLogo)


        const page4 = new Discord.MessageEmbed()
        .setTitle('Page 3')
        .setColor(client.config["embedColours"].helpColour)
        .addFields(
            {
                name: '> joke',
                value: 'Allows people to make jokes'
            },
            {
                name: '> kick (user) (reason)',
                value: 'Allows people to kick other people'
            },
            {
                name: '> kiss (user)',
                value: 'Allows the person to kiss the other person'
            },
            {
                name: '> meme',
                value: 'Displays a random meme off reddit'
            },
            {
                name: '> new',
                value: 'Allows people to make tickets'
            },
            {
                name: '> ping',
                value: 'Pings the bot'
            },
            {
                name: '> poll (poll)',
                value: 'Allows the person to make a poll'
            },
            {
                name: '> remove (user)',
                value: 'Removes the stated person from the ticket'
            },
            {
                name: '> rename (new name)',
                value: 'Allows people to rename tickets'
            },
            {
                name: '> say',
                value: 'Allows people to speak as the bot'
            },
            {
                name: '> unban-everyone',
                value: 'Allows the owner to un-ban everyone'
            },
            {
                name: '> warn (user) (reason)',
                value: 'Allows moderators to warn people'
            },
            {
                name: '> credits',
                value: 'Displays the credits for the development of this bot.'
            }
        )

        const pages = [
            page1, 
            page2,
            page3,
            page4
        ]
        
        const emoji = ["◀️", "▶️"]

        const timeout = '300000'

        pagination(message, pages, emoji, timeout)
    }
}