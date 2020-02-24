const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu n'est pas autorisé(e) a utiliser cette commande !");
    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage)
}
module.exports.help = {
    name: "say"
}