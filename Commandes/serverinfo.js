const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async(client, message, args) => {
    const serverLevel = ["None", "Low", "Medium", "High", "Max"];

    const embed = new Discord.RichEmbed()
    .setColor("#12DFC5")
    .addField("Propriétaire :", message.guild.owner.user.tag, true)
    .addField("ID :", message.guild.id, true)
    .addField("Utilisateur(s) :", message.guild.memberCount, true)
    .addField("Bot(s) :", message.guild.members.filter(mem => mem.user.bot === true).size, true)
    .addField("Hors ligne :", message.guild.members.filter(mem => mem.presence.status === "offline").size, true)
    .addField("En ligne :", message.guild.members.filter(mem => mem.presence.status === "online").size, true)
    .addField("Inactifs :", message.guild.members.filter(mem => mem.presence.status === "idle").size, true)
    .addField("Ne pas déranger :", message.guild.members.filter(mem => mem.presence.status === "dnd").size, true)
    .addField("Role(s) :", message.guild.roles.size, true)
    .addField("Niveau de vérification :", serverLevel[message.guild.verificationLevel]) 
    .addField("Date de création :", moment.utc(message.guild.createdAt).format("dddd, MMMM Do, YYYY"), true)
    .addField(`Liste des rôles (${message.guild.roles.size - 1})`, message.guild.roles.map(roles => roles).join(" ").replace("@everyone", " "))

    message.channel.send(embed);
}

module.exports.help = {
    name: "serverinfo"
}