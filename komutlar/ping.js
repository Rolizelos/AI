const Discord = require('discord.js');
exports.run = function(client, message, args) {
  
  const bergy = new Discord.RichEmbed()
.setColor(`RANDOM`)
.setDesription(``)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};