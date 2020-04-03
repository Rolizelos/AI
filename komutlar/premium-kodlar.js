const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(message.channel.id != "KANAL ID") return message.channel.send(':x: **Bu Komutudu <#KANAL ID> Kanalında Kullan!**').then(n => n.delete(5000));  
let a = message.guild.channels.find(x => x.id === 'KATEGORİ ID')
let b = a.children.map(x => x.name )
let c = message.guild.channels.find(x => x.id === 'KATEGORİ ID')
let d = c.children.map(x => x.name )
let e = message.guild.channels.find(x => x.id === 'KATEGORİ ID')
let f = e.children.map(x => x.name )
message.author.send(new Discord.RichEmbed()
  .setTitle(`${message.guild.name} Adlı Sunucudaki Premium Kodlar!`)
  .addField(`** **`, `\`Ücretsiz\` **__JavaScript__** Kategorisi;\n ${b.join(`\n`)}`)
  .addField(`** **`, `\`7 İnvite\` **__JavaScript++__** Kategorisi;\n ${d.join(`\n`)}`)
  .addField(`** **`, `\`10 İnvite\`  **__Altyapı__** Kategorisi;\n ${f.join(`\n`)}`)
  .setColor("GOLD"))
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kodlar',
};