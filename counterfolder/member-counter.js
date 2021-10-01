module.exports = async (client) =>{
    if(client.config["moduleToggle"].memberCounting !== true) return console.log(`Member counting is disabled via the config.`)
    const guild = client.guilds.cache.get(client.config["main_config"].serverGuildID);
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get(client.config["main"].memberCountingVCID);
        channel.setName(`Member Count: ${memberCount.toLocaleString()}`);
    }, 5000);
}