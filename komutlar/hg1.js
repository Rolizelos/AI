// Komutlar.
const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message ,args) => {
    if (!args[0]) return message.channel.send(`${client.emojis.get("665930842786365473")} **Eksik Veya Hatalı Komut Kullanımı:** Doğru Kullanım: \`${ayarlar.prefix}hgkanal ayarla #kanal /${ayarlar.prefix}hgkanal kapat\``)
  
  
  let ayar = args[0]
  
  
  
  
  let cfxkanal = message.mentions.channels.first()
  if(args[0] == 'ayarla') {
  db.set(`hgayar1${message.guild.id}`, cfxkanal.id)
  message.channel.send(`**Kanal Ayarlandı! \nAyarlanan Kanal:** \`${cfxkanal.name}\``)
    return;
  }
  if(args[0] == 'kapat') {
  db.delete(`hgayar1${message.guild.id}`)
  message.channel.send(`**Hoşgeldin Kanalı Kapatıldı!**`)
    return;
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hg',],
  permLevel: 0,
};
  //CodeFENIX //CFX
exports.help = {
  name: "anıl",
  by_codefenix: "copyright JaimiTR"
}; 