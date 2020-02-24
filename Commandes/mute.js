const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async(client, message, args) => {

    if(message.channel.type === "dm") return message.reply("**__Erreur__ :** Mes commandes sont désactivées en message privé ! rejoin mon discor dpour m'utiliser : https://discord.gg/jkP95c6")
    message.delete()
    if(message.author.bot) return;
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
    if(!tomute) {
        return message.reply("Je ne trouve pas l'utilisateur")
    }
    if(tomute.hasPermission("ADMINISTRATOR")) return message.reply("Je ne peux pas mute un administrateur")
    let muterole = message.guild.roles.find(`name`, "mute")
    if(!muterole) {
        try{
            muterole = await message.guild.createRole({
                name: "mute",
                color: "000000",
                premissions: []
            })
            message.guild.channels.foEach(async (channel, id) => {
                await channel.overwritePremissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: fasle
                });
            });
        }catch(e){
            console.log(e.stack)
        }
    }
    let mutetime = args[1]
    if(!mutetime) return message.reply("Vous n'avez pas précisé de temps")

    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> à été mute pour ${ms(ms(mutetime))}`)

    setTimeout(function(){
        tomute.removeRole(muterole.id)
        message.channel.send(`<@${tomute.id}> à été unmute !`)
    }, ms(mutetime));
}

module.exports.help = {
    name: "mute"
}