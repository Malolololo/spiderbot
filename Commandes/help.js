const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    let embed = new Discord.RichEmbed()
        .setTitle("**__Menu help__**")
        .setColor("#DB1515")
        .addField("**🥳 Commandes fun**", "*/help-fun* pour avoir la liste des commandes fun !")
        .addField("**👮‍♂️ Commandes Modération**", "*/help-mod* pour avoir la liste des commandes de modération !")
        .addField("**🙄 Commandes Utiles**", "*/help-utile* pour avoir la liste de toutes les autres commandes!")
        
    message.channel.send(embed)
}

module.exports.help = {
    name: "help"
}