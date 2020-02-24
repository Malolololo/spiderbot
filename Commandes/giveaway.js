const discord = require("discord.js");
 
module.exports.run = async(client, message, args) => {
 
    
    var item = "";
    var time;
    var winnerCount;
 
    
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Désolé, vous n'avez pas les permissions necéssaire. Vous devez avoir les permissions administrateur.");
 
    
 
    
    winnerCount = args[0];
    
    time = args[1];
    
    item = args.splice(2, args.length).join(' ');
 
   
    message.delete();
 
    
    var date = new Date().getTime();
    var dateTime = new Date(date + (time * 60000));
 
    
    var giveawayEmbed = new discord.RichEmbed()
        .setColor("#ffffff")
        .setTitle("🎉 **GIVEAWAY** 🎉")
        .setFooter(`Fin le: ${dateTime}`)
        .setDescription(`Réagis a ce message avec 🎉 pour avoir une chance de gagner **${item}**\nAuteur : ${message.author.tag}`);
 
    
    var embedSend = await message.channel.send(giveawayEmbed);
    embedSend.react("🎉");
 
    
    setTimeout(function () {
 
        
        var random = 0;
        var winners = [];
        var inList = false;
 
        
        var peopleReacted = embedSend.reactions.get("🎉").users.array();
 
       
        for (var i = 0; i < peopleReacted.length; i++) {
            if (peopleReacted[i].id == client.user.id) {
                peopleReacted.splice(i, 1);
                continue;
            }
        }
 
        
        if (peopleReacted.length == 0) {
            return message.channel.send("Je n'ai pas pu trouver de gagant car personne n'a réagit.");
        }
 
        
        if (peopleReacted.length < winnerCount) {
            return message.channel.send("Vous devez donner un nombre de gagant.");
        }
 
        
        for (var i = 0; i < winnerCount; i++) {
 
            inList = false;
 
            
            random = Math.floor(Math.random() * peopleReacted.length);
 
            
            for (var y = 0; y < winners.length; y++) {
                
                if (winners[y] == peopleReacted[random]) {
                    
                    i--;
                    
                    inList = true;
                    break;
                }
            }
 
            
            if (!inList) {
                winners.push(peopleReacted[random]);
            }
 
        }
 
        for (var i = 0; i < winners.length; i++) {
            message.channel.send("Le gagnant est " + winners[i] + ` ! Il a gagné : **${item}**.`);
        }
 
    }, 60000 * time);
 
 
}
 
module.exports.help = {
    name: "gstart"
}