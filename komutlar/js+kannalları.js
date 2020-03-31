const Discord = require('discord.js');
exports.run = function(client, message, args) {
let a = message.guild.channels.find(x => x.id === '688789268411580442')
let b = a.children.map(x => x +  x.name)
let c = message.guild.channels.find(x => x.id === '688789268411580442')
let d = c.children.map(x => x +  x.name)
let e = message.guild.channels.find(x => x.id === '688789268411580442')
let f = e.children.map(x => x +  x.name)
message.author.send(new Discord.RichEmbed()
  .setAuthor(`${message.guild.name} Adlı Sunucudaki Premium Kodl`)
  .setDescription(`${b.join('\n')}`)
  .setColor(`PURPLE`))

  
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