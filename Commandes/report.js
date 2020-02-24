const Discord = require("discord.js");
const prefix = '*';

module.exports.run = async(client, message, args) => {
    if(message.content.startsWith(prefix + "report")) {
        let reportedUser = message.guild.member(
            message.mentions.users.first() || message.guild.members.get(args[0])
        );
        if(!reportedUser) {
            return message.channel.send("L'utilisateur n'existe pas !");
        }
        let reportedReason = args.join(' ').slice(22);

        let reportEmbed = new Discord.RichEmbed()
          .setDescription('Reports')
          .setColor('#051050')
          .addField(
              'Utilisateur reporté',
              `̀̀${reportedUser} (ID :  ${reportedUser.id})`
          )
          .addField(
              'Utilisateur ayant reporté',
              `${message.author} (ID: ${message.author.id})`
          )
          .addField('Salon', message.channel)
          .addField('Raison', reportedReason);
        
        let reportChannel = message.guild.channels.find('name', '〘🥴〙arrivée-report');
        if(!reportChannel) {
            return message.channel.send(
                "Salon '〘🥴〙arrivée-report' introuvable. Veuillez d'abord créer ce salon et réessayer !"
            );
        }

        message.delete();
        reportChannel.send(reportEmbed);
    }
};

module.exports.help = {
    name: "report"
};