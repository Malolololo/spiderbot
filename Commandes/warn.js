const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(message.channel.type === "dm") return;
    message.delete()
    if(message.author.bot) return;
    var mentionned = message.mentions.users.first()
    if(!message.guild.member(message.author).hasPermission("VIEW_AUDIT_LOG")) return message.channel.send("Vous ,'avez pas la permission d'exécuter cette commande !");
    if(message.mentions.users.size === 0) {
        return message.channel.send("Vous devez mentionner un utilisateur !");
    }else {
        const args = message.content.split(' ').slice(1)
        if(args[0] === "<@!" + mentionned.id + ">" || args[0] === "<@" + mentionned.id + ">") {
            if(args.slice(1).length != 0) {
                message.channel.send(`${mentionned.tag} à été averti !`)
                mentionned.send(`Vous venez d'être averti sur le serveur ${message.guild.name} par ${message.author.username}\nRaison : ${args.slice(1).join(' ')}`)
            }else{
                return message.reply("Utilisation de la commande incorecte !")
            }
        }else{
            return message.reply("Utilisation de la commande incorecte !")
        }
    }
};

module.exports.help = {
    name: "warn"
}