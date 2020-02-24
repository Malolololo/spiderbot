const Discord = require("discord.js");
const prefix = "/";

module.exports.run = async(client, message, args) => {
    if(message.content.startsWith(prefix + "mpall")) {
 
        var args = message.content.split(" ").slice(1);
        var msge = args.join(' ');

        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!");
        if(!msge) return message.channel.send("Precise un message")

        message.delete()
        message.guild.members.map(m => m.send(msge))
    }
};

module.exports.help = {
    name: "mpall"
};