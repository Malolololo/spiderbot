const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    message.channel.send(`**<@${message.author.id}> voici le serveur support :** https://discord.gg/EUxtcyV **N'hésite pas a le rejoindre et a y faire des invitations pour recevoir des récompenses !**`)
    message.delete();
};

module.exports.help = {
    name: "support"
}