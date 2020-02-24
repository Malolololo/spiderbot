const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    let embed = new Discord.RichEmbed()
        .setTitle("**__Help Fun__**")
        .setColor("#DB1515")
        .addField("/8Ball <texte>", "Tu veux jouer au 8Ball ? Fait cette commande !")
    message.channel.send(embed)
}

module.exports.help = {
    name: "help-fun"
}