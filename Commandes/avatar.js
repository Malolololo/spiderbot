const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    let waiting = await message.channel.send("j'attend de recevoir l'image.").catch(console.error);
 
    let mentionedUser = message.mentions.users.first() || message.author;
 
    let avatarembed = new Discord.RichEmbed()
 
        .setImage(mentionedUser.displayAvatarURL)
        .setColor("RANDOM")
        .setTitle("Avatar")
        .setFooter("Demendé par " + message.author.tag)
        .setDescription("[Lien de l'avatar](" + mentionedUser.displayAvatarURL + ")");
 
    waiting.edit(avatarembed).catch(console.error)
}
 
module.exports.help = {
    name: "avatar"
}