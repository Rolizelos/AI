// Komutlar.
const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message ,args) => {
  
  var prefix = ayarlar.prefix 
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send(`**>>> Eksik Komut Kullanımı: Doğru Kullanım: \`${prefix}bb <mesaj>\`\nKanal Ayarlamak İçin: \`${prefix}bb ayarla #kanal\`\nKanalı Kapatmak İçin: \`${prefix}bb kapat\`**`)
  
 message.channel.send('Görüşürüz Mesajını `'+mesaj+'` Olarak ayarladım.') 
 db.set(`bbmesaj_${message.guild.id}`, mesaj)  
  
  
  
  let cfxkanal = message.mentions.channels.first()
  if(args[1] == 'ayarla') {
  db.set(`bbayar1${message.guild.id}`, cfxkanal.id)
  message.channel.send(`**Kanal Ayarlandı! \nAyarlanan Kanal:** \`${cfxkanal.name}\``)
    return;
  }
  if(args[1] == 'kapat') {
  db.delete(`bbayar1${message.guild.id}`)
  message.channel.send(`**Görüşürüz Kanalı Kapatıldı!**`)
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
  name: "bb",
  by_codefenix: "copyright JaimiTR"
}; 