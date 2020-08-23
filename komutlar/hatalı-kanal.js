const Discord = require('discord.js');
const a = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  
  let cfxhatalı = await db.fetch(`hatalıkanal${message.guild.id}`)//GweepCreative
  let cfxhatalıkanal = message.mentions.channels.first();//GweepCreative
  
  const cfx1 = new Discord.RichEmbed()
  .setDescription(`Hatalı Kanalı ${cfxhatalıkanal} olarak ayarlandı.`)//GweepCreative
  .setColor("#00ff88")//GweepCreative
  .setFooter(`${client.user.username} | Hatalı Kanal Sistemi.`, client.user.avatarURL)//GweepCreative
  const cfx2 = new Discord.RichEmbed()
  .setDescription(`Hatalı Kanalı Kapatıldı.`)
  .setColor("#00ff88")//GweepCreative
  .setFooter(`${client.user.username} | Hatalı Kanal Sistemi.`, client.user.avatarURL)//GweepCreative
  const cfxembed = new Discord.RichEmbed()//GweepCreative//GweepCreative
  .setTitle(`**\`Hatalı-Kanal Bilgi;\`**`)
  .setDescription(`** ** \n**Ayarlamak İçin:** \`${a.prefix}hatalı-kanal ayarla #kanal\`\n\n **Kapatmak İçin:** \`${a.prefix}hatalı-kanal kapat\``)
  .setColor("#00ff88")//GweepCreative
  .setFooter(`${client.user.username} | Hatalı Kanal Sistemi.`, client.user.avatarURL)
  
  
  if (!args[0]) return message.channel.send(cfxembed)
  
  if (args[0] == cfxhatalıkanal) return db.set(`hatalıkanal${message.guild.id}`, cfxhatalıkanal.id) - message.channel.send(cfx1);
    

  if (args[0] == 'ayarla') {
    
    db.set(`hatalıkanal${message.guild.id}`, cfxhatalıkanal.id)//GweepCreative
    message.channel.send(cfx1)//GweepCreative
    
    
  }
  
  if (args[0] == 'kapat') {
    
    db.delete(`istekkanal${message.guild.id}`)
    message.channel.send(cfx2)
    
  }
  
  
};

//GweepCreative
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
