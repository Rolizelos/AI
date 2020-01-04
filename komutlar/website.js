const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {

const bergy = Discord.RichEmbed()

.setColor(`RED`)
.setDescription(`Sunucumuzun Botlisti`)
.addField(`Website Link : (Bana Tıkla!)[https://liberbotlist.glitch.me/]`)
.setFooter(`LiberCode | Botlist`)

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['y2'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'botpp',
    description: 'Bot Avatar!',
    usage: 'bot-pp'
  };

//By Bergy | LiberCode/Botlist