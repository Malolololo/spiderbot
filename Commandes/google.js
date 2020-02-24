const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.displayAvatarUrl)
    .setTitle("Google²")
    .addField("**__Hey !__** Voici ta recherche :", "https://google.com/search?q=" + args.slice(0))
    message.channel.send(embed);
}

module.exports.help = {
    name: "google"
}