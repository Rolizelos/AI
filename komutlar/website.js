const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {

const bergy = new Discord.RichEmbed()

.setColor(`RED`)
.setTitle(`Sunucumuzun Botlisti`)
.setDescription(`Website Link : https://liberbotlist.glitch.me/`)
.setThumbnail(`https://cdn.discordapp.com/attachments/662003760029237258/662934181885640704/poster12_21_161342.png`)
.setFooter(`LiberCode | Botlist`)

return message.channel.send(bergy).then(n => n.delete(40000));
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ws'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'website',
    description: 'LiberCode Botlist',
    usage: 'website/ws'
  };

//By Bergy | LiberCode/Botlist