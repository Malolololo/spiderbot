const Discord = require('discord.js');
const prefix = "/";

module.exports = (client, message) => {
    if (message.author.bot || message.channel.type === 'dm') return ("**__Hey !__** Désolé mais mes commandes sont désactivées en message privé :-/ Rejoin mon discrd pour m'utiliser : https://discord.gg/jkP95c6 ")
    if (!message.channel.permissionsFor(client.user).has('SEND_MESSAGES')) { return; }
    if (!message.content.startsWith(prefix)) { return; }

        let args = message.content.slice(prefix.length).trim().split(/ +/g);
        let commande = args.shift();
        let cmd = client.commands.get(commande);

        if (!cmd) { return; }
            cmd.run(client, message, args);
};