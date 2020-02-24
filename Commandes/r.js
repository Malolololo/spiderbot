const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Tu n'a pas la permission.")
    let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
    let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
    await rMember.addRole(role.id).catch(e => console.log(e.message))
}

module.exports.help = {
    name: "add"
}