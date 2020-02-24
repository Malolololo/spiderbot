const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    let embed = new Discord.RichEmbed()
        .setTitle("**__Help Modération__**")
        .setColor("#DB1515")
        .addField("/ban <joueur> <raison>", "Pour bannir un utilisateur, fait cette commande !")
        .addField("/kick <joueur> <raison>", "Pour kick un utilisateur, fait cette commande !")
        .addField("/mute <temps> <joueur> <raison>", "Pour mute un utilisateur temporairement, fait cette commande ! *(le temps est en secondes !)*")
        .addField("/clear <nombre>", "Pour supprimé un certain de nombre de message !")
        .addField("/warn <joueur> <raison>", "Pour avertir un utilisateur !")
        .addField("/say <texte>", "Pour faire envoyer un message donner par le bot !")
        .addField("/mpall <texte>", "Pour envoyer un message privé a tous les utilisateurs du serveur !")
        .addField("/gstart <nombreDeGagnant> <temps en minutes> <récompense>", "Pour faire un giveaway, fait cette commande !")
    message.channel.send(embed)
}

module.exports.help = {
    name: "help-mod"
}