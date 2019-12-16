const Discord = require('discord.js');
const db = require('quick.db');
const a = require('../ayarlar.json') 
 
exports.run = async function(client, message, args) {
  message.channel.bulkDelete(1)
  let user = message.author
    
  const cfx1 = new Discord.RichEmbed()
  .setDescription(`**İstek Kanalı Ayarlanmamış!** \n\n **Ayarlamak İçin:** \`${a.prefix}istek-kanal ayarla #kanal\``)
  .setColor("#00ff88")
  .setFooter(`LiberCode | İstek Sistemi.`, client.user.avatarURL)
  const cfx2 = new Discord.RichEmbed()
  .setDescription(`\`${user.tag}\` Lütfen isteğinizi belirtin.`)
  .setColor("#00ff88")
  .setFooter(`LiberCode | İstek Sistemi.`, client.user.avatarURL)

  const cfx4 = new Discord.RichEmbed()
  .setDescription(`\`${user.tag}\` İsteğin bildirildi!`)
  .setColor("#00ff88")
  .setFooter(`LiberCode | İstek Sistemi.`, client.user.avatarURL)

  
  
  
    let cfxistekkanal = await db.fetch(`istekkanal${message.guild.id}`)
    let chan = message.guild.channels.find('id', cfxistekkanal)
    let code = args.slice(0).join(' ');
    if (!cfxistekkanal) return message.channel.send(cfx1)
    if (code.length < 1) return message.channel.send(cfx2);
  if (message.author) {

//CodeFENIX // CFX



message.channel.send(cfx4).then(m => {
  m.delete(3000)
})
//CodeFENIX //CFX
    chan.send(`<@&654395044614373387>`).then(m => {
chan.send(new Discord.RichEmbed()
.setColor("#00ff88")
.addField(`\n\nKullanıcı Adı`, message.author.username,true)
.addField(`Kullanıcı ID`,message.author.id,true)
.addField("**İstek Kod**", `\`${code}\``)
.setThumbnail(message.author.avatarURL))
})


}};

// CodeFENIX // CFX
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'istek',
  description: 'CODEFENIX KOD PAYLASIM',
  usage: 'istek <istediğiniz>'
};
