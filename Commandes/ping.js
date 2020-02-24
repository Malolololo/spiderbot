const discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    message.channel.send({embed: {
        color: 0x2ed32e,
        fields: [{
            name: "Ping",
            value: "Mon ping est de : " + Math.round(client.ping) + ' ms'
      }
     ]
}})}

module.exports.help = {
    name: "ping"
}