const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    
    mention = message.mentions.users.first();

    if(mention == null) message.reply("**__Erreur__ :** Veuillez mentionner un utilisateur !")
    message.delete();

    mentionMessage = message.content.slice(4);

    if(mentionMessage == null) message.reply("**__Erreur__ :** Veuillez entrer un message à envoyer !")

    mention.send(`📥 | Message reçu de ${message.author.username} : ` + mentionMessage);
    message.channel.send(`📤 | Le message à bien été envoyé à ${mention} !`)
};

module.exports.help = {
    name: "mp"
};