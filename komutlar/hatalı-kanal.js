const Discord = require('discord.js');
const a = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  
  let cfxistek = await db.fetch(`istekkanal${message.guild.id}`)
  let cfxistekkanal = message.mentions.channels.first();
  
  const cfx1 = new Discord.RichEmbed()
  .setDescription(`Hatalı Kanalı ${cfxistekkanal} olarak ayarlandı.`)
  .setColor("#00ff88")
  .setFooter(`ARK | Hatalı Kanal Sistemi.`, client.user.avatarURL)
  const cfx2 = new Discord.RichEmbed()
  .setDescription(`İstek Kanalı Kapatıldı.`)
  .setColor("#00ff88")
  .setFooter(`ARK | Hatalı Kanal Sistemi.`, client.user.avatarURL)
  const cfxembed = new Discord.RichEmbed()
  .setTitle(`**\`Hatalı-Kanal Bilgi;\`**`)
  .setDescription(`** ** \n**Ayarlamak İçin:** \`${a.prefix}hatalı-kanal ayarla #kanal\`\n\n **Kapatmak İçin:** \`${a.prefix}hatalı-kanal kapat\``)
  .setColor("#00ff88")
  .setFooter(`ARK | Hatalı Kanal Sistemi.`, client.user.avatarURL)
  
  
  if (!args[0]) return message.channel.send(cfxembed)
  
  if (args[0] == cfxistekkanal) return db.set(`istekkanal${message.guild.id}`, cfxistekkanal.id) - message.channel.send(cfx1);
    

  if (args[0] == 'ayarla') {
    
    db.set(`istekkanal${message.guild.id}`, cfxistekkanal.id)
    message.channel.send(cfx1)
    
    
  }
  
  if (args[0] == 'kapat') {
    
    db.delete(`istekkanal${message.guild.id}`)
    message.channel.send(cfx2)
    
  }
  
  
};

// CodeFENIX // CFX
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['hkanal'],
  permLevel: 0 
};

exports.help = {
  name: 'hatalı-kanal',
  description: 'CODEFENIX KOD PAYLASIM',
  usage: 'istek-kanal #kanal'
};
