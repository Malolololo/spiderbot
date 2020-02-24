//Commande qui permet de bannir une personne
const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");

    if(message.mentions.users.size === 0) {
        return message.channel.send("Vous devez mentionner un utilisateur");
    }

    let ban = message.guild.member(message.mentions.users.first());
    let raison 

    if(!ban) {
        return message.channel.send("Je n'ai pas trouvé l'utilisateur !");
    }

    if(!message.guild.member(client.user).hasPermissions("BAN_MEMBERS")) return message.channel.send("Je n'ai pas la permissions de bannir les utilisateurs sur ce serveur !");

    ban.ban().then(member => {

        message.channel.send(`**${member.user.username}** a été bannis du serveur par **${message.author.username}** pour la raison : **${args.slice(1).join(' ')}**`);

    message.mentions.users.firts().send(`Vous avez été bannis du serveur **${message.guild.name}** par **${message.author.username} pour la raison : **${args.slice(1).join(' ')}**`);
    });
};

module.exports.help = {
    name: "ban"
};