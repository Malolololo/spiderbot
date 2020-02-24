const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    message.channel.send(`Bienvenue ! Passe un agréable moment sur notre serveur !`);
    message.delete()
};

module.exports.help = {
    name: "bvn"
}