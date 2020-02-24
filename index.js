const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');
const prefix = '/';
const get = require("get");
const xp = require("./xp.json")

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});

const activities_list = [
    `🍡 • ᴄᴏʀʀᴜᴘᴛ`,
    `🍾 | Protège SpiderFight`,
    `🍾 | SpiderFight ••> https://discord.gg/jkP95c6`,
    `${prefix}help `,
  ];
  
  client.on("ready", () => {
    setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
      client.user.setActivity(activities_list[index], {
        status: "online",
        type: "STREAMING",
        url: "https://twitch.tv/dubrin"
      });
    }, 2000);
    console.log(
      `${client.user.username} connecté ${client.users.size} 𝑼𝑻𝑰𝑳𝑰𝑺𝑨𝑻𝑬𝑼𝑹𝑺 !`
    );
  });
client.on("message", message => {
  let xpAdd = Math.floor(Math.random() * 7) + 8;

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Bien joué ! Tu es monté d'un niveau !")
    .setThumbnail(message.author.displayAvatarURL)
    .setColor("red")
    .addField("Nouveau niveau :", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
  }
  if(message.content.startsWith(prefix + "rank")) {
      let embed = new Discord.RichEmbed()
      .setTitle("Niveau")
      .setThumbnail(message.author.displayAvatarURL)
      .addField("__Xp :__", curxp)
      .addField("__Niveau :__", curlvl)

      message.channel.send(embed)
  }
  var targetUser = null;
  var isAnotherUserLookup = false;
})

client.on('message', message => {

  // Initialize the invite cache
  const invites = {};

  // A pretty useful method to create a delay without blocking the whole script.
  const wait = require('util').promisify(setTimeout);

  client.on('ready', () => {
    // "ready" isn't really ready. We need to wait a spell.
    wait(1000);

    // Load all invites for all guilds and save them to the cache.
    client.guilds.forEach(g => {
      g.fetchInvites().then(guildInvites => {
        invites[g.id] = guildInvites;
      });
    });
  });

  client.on('guildMemberAdd', member => {
    const logChannel = member.guild.channels.find(channel => channel.name === "👋・arrivée");
    logChannel.send(`> 👉・Bienvenue à **<@${member.id}>** sur le serveur ! \n> Pour avoir accès à tout le serveur, rend toi dans <#660768541422911530> puis coche la réaction ;) \n> N'oublie pas de lire le règlement et surtout, \n\n**__Bon séjour sur notre serveur !__**`)
  });
})
client.login("NjY1NTU5MDI2MDM3MTYyMDE4.XlQqyQ.hdUekR_rweYOzjbgtLxwS7mYXFY")