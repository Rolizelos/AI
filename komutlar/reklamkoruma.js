const db = require('quick.db')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Buna yetkin yok!`);
  if (!args[0]) return message.channel.send(`${client.emojis.get("664532426638491659")} **Aç Veya Kapat Yazmalısın!**  \`${ayarlar.prefix}reklamkoruma aç/kapat\``)

  let reklam = await db.fetch(`reklam_${message.guild.id}`)
  let reklamkapalim = await db.fetch(`reklamkapali${message.guild.id}`)

  
  
  
  if (args[0] === 'aç') {
    
if (reklam === 'Açık') {
message.channel.send('<a:hayr:661269808544874527> **Reklam Koruması Zaten Aktif!**')
return
} 
    
else {
    db.set(`reklam_${message.guild.id}`, 'Açık')
    db.delete(`reklamkapali${message.guild.id}`, 'RKapalı')
     message.channel.send('<a:onay:661269808544874527> **Reklam Koruması başarıyla açıldı!**')
}
    
    
  }
  else if (args[0] == 'kapat') {
    
if (reklamkapalim === 'RKapalı') {            
message.channel.send(` ${client.emojis.get("661269808544874527")} **Reklam Koruması Zaten Kapalı!**`)
return
      
}
else {    
    db.delete(`reklam_${message.guild.id}`, 'Kapalı')
    db.set(`reklamkapali${message.guild.id}`, 'RKapalı')
      message.channel.send('<a:onay:661269808544874527> **Reklam Koruması başarıyla kapatıldı!**')
     }
  }
    

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'reklamkoruma',
  description: 'CODEFENIX KOD PAYLASIM',
  usage: 'reklamkoruma'
};