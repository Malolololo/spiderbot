const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permissions de gérer les messages !").catch(console.error);

    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je n'ai pas la permissions de gérer les messages sur ce serveur !").catch(console.error);

    if(!args[0]) return message.channel.send("Vous devez spécifier un nombre de message à supprimer");

    if(isNaN(args[0])) return message.channel.send("Veuillez spécifier un nombre et non pas un mot");

    message.channel.bulkDelete(args[0]);

    message.channel.send(`${args[0]} messages ont été supprimés !`);

};

module.exports.help = {
    name: "clear"
}