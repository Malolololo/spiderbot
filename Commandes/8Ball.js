const discord = require("discord.js");
module.exports.run = async(client, message, args) => {
    ballMessage = message.content.slice(7);
    number = 2;
    var random = Math.floor (Math.random() * (number -1 + 1)) + 1;
    switch (random) {
        case 1: message.channel.send('Le 8Ball à dit __oui__ à "*' + ballMessage + '*"'); break;
        case 2: message.channel.send('Le 8Ball à dit __non__ à "*' + ballMessage + '*"'); break;
    }
}

module.exports.help = {
    name: "8ball"
}