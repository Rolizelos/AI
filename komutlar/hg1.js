// Komutlar.
const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message ,args) => {
  
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('Eksik Komut Kullanımı: Doğru Kullanım:' + ${prefix}hg `mesaj` + '\n Kanal Ayarlamak İçin:${prefix}hg ayarla #kanal\n Kapatmak İçin: ${prefix}hg kapat')
  
 message.channel.send('<a:basarl:626445944258560012> Sayaç Hoşgeldin mesajını `'+mesaj+'` Olarak ayarladım.') 
 db.set(`sayachgmsj_${message.guild.id}`, mesaj)  
  
  
  
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