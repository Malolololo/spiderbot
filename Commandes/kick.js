//Commande qui permet d'expulser une personne 
const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");

    if(message.mentions.users.size === 0) {
        return message.channel.send("Vous devez mentionner un utilisateur");
    }

    let kick = message.guild.member(message.mentions.users.first());

    if(!kick) {
        return message.channel.send("Je n'ai pas trouvé l'utilisateur !");
    }

    if(!message.guild.member(client.user).hasPermissions("KICK_MEMBERS")) return message.channel.send("Je n'ai pas la permissions d'expulser les utilisateurs sur ce serveur !");

    kick.kick().then(member => {

        message.channel.send(`**${member.user.username}** a été expulser du serveur par **${message.author.username}** pour la raison **${args.slice(1).join(' ')}**`);
        message.mentions.users.firts().send(`Vous avez été exuplsez du serveur **${message.guild.name}** par **${message.author.username} pour la raison : **${args.slice(1).join(' ')}**`);
    });
};

module.exports.help = {
    name: "kick"
};