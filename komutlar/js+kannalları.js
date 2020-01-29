const Discord = require('discord.js');
exports.run = function(client, message, args) {
  
  
    let a = message.guild.channels.find(x => x.id=== '669657282065465371')
a.children.map(x => x.name)
  
  const js = new Discord.RichEmbed()
  .setAuthor(`JS+ Kategorisindeki Kanalları:`)
  .setDescription(`${a}`)


message.channel.send(js)

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'js+',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};