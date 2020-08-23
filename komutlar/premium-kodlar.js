const Discord = require('discord.js');//GweepCreative
exports.run = function(client, message, args) {
if(message.channel.id != "KANAL ID") return message.channel.send(':x: **Bu Komutudu <#KANAL ID> Kanalında Kullan!**').then(n => n.delete(5000));  
let a = message.guild.channels.find(x => x.id === 'KATEGORİ ID')//GweepCreative
let b = a.children.map(x => x.name )//GweepCreative
let c = message.guild.channels.find(x => x.id === 'KATEGORİ ID')//GweepCreative
let d = c.children.map(x => x.name )//GweepCreative
let e = message.guild.channels.find(x => x.id === 'KATEGORİ ID')//GweepCreative
let f = e.children.map(x => x.name )//GweepCreative
message.author.send(new Discord.RichEmbed()//GweepCreative
  .setTitle(`${message.guild.name} Adlı Sunucudaki Premium Kodlar!`)//GweepCreative
  .addField(`** **`, `\`Ücretsiz\` **__JavaScript__** Kategorisi;\n ${b.join(`\n`)}`)//GweepCreative
  .addField(`** **`, `\`7 İnvite\` **__JavaScript++__** Kategorisi;\n ${d.join(`\n`)}`)//GweepCreative
  .addField(`** **`, `\`10 İnvite\`  **__Altyapı__** Kategorisi;\n ${f.join(`\n`)}`)//GweepCreative
  .setColor("GOLD"))//GweepCreative
  //GweepCreative
};//GweepCreative
//GweepCreative
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};//GweepCreative
//GweepCreative
exports.help = {
  name: 'kodlar',
};