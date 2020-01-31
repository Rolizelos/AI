const Discord = require('discord.js');
exports.run = function(client, message, args) {
  
  message.channel.bulkDelete(1)
    let a = message.guild.channels.find(x => x.id === '669657282065465371')
    let b = a.children.map(x => x + x.name)

  const js = new Discord.RichEmbed()
  .setAuthor(`JS+ Kategorisindeki Kanallar:`)
  .setDescription(`${b.join('\n')}`)
  .setColor(`PURPLE`)


message.author.send(js)

  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'js+',
};