const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    let embed = new Discord.RichEmbed()
        .setTitle("**__Help Utile__**")
        .setColor("#DB1515")
        .setThumbnail(message.author.displayAvatarUrl)
        .addField("/mp <mention> <texte>", "Tu veux envoyer un message privé a une personne depuis le bot ? Fait cette commande !")
        .addField("/avatar [mention]", "Tu veux voir ton avatar ou celui du'n autre en grand et pouvoir le télécharger ? Fait cette commande !")
        .addField("/google <texte>", "Tu veux faire une recherche sur google mais tu as la flemme de l'ouvrir ? Fait cette commande !")
        .addField("/ping", "Tu veux connaître le ping du bot ? Fait cette commande !")
        .addField("/support", "Tu veux rejoindre le serveur support du bot ? Fait cette commande !")
        .addField("/serverinfo", "Tu veux des informations sur le serveur ? fait cette commande !")
        .addField("/userinfo [mention]", "Tu veux des informations sur toi ou un autre utilisateur ? Fait cette commande !")
        .setFooter("[ ] = non obligatoire | < > = obligatoire")
    message.channel.send(embed)
}

module.exports.help = {
    name: "help-utile"
}