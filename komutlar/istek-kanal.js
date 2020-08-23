const Discord = require('discord.js');
const a = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  
  let cfxistek = await db.fetch(`istekkanal${message.guild.id}`)
  let cfxistekkanal = message.mentions.channels.first();
  
  const cfx1 = new Discord.RichEmbed()//GweepCreative
  .setDescription(`İstek Kanalı ${cfxistekkanal} olarak ayarlandı.`)//GweepCreative
  .setColor("#00ff88")//GweepCreative
  .setFooter(`${client.user.username} | İstek Kanal Sistemi.`, client.user.avatarURL)//GweepCreative
  const cfx2 = new Discord.RichEmbed()//GweepCreative
  .setDescription(`İstek Kanalı Kapatıldı.`)//GweepCreative
  .setColor("#00ff88")//GweepCreative
  .setFooter(`${client.user.username} | İstek Kanal Sistemi.`, client.user.avatarURL)//GweepCreative
  const cfxembed = new Discord.RichEmbed()//GweepCreative
  .setTitle(`**\`İstek-Kanal Bilgi;\`**`)//GweepCreative
  .setDescription(`** ** \n**Ayarlamak İçin:** \`${a.prefix}istek-kanal ayarla #kanal\`\n\n **Kapatmak İçin:** \`${a.prefix}istek-kanal kapat\``)//GweepCreative
  .setColor("#00ff88")//GweepCreative
  .setFooter(`${client.user.username} | İstek Kanal Sistemi.`, client.user.avatarURL)//GweepCreative
  
  
  if (!args[0]) return message.channel.send(cfxembed)//GweepCreative
  //GweepCreative
  if (args[0] == cfxistekkanal) return db.set(`istekkanal${message.guild.id}`, cfxistekkanal.id) - message.channel.send(cfx1);//GweepCreative
    //GweepCreative
//GweepCreative
  if (args[0] == 'ayarla') {
    
    db.set(`istekkanal${message.guild.id}`, cfxistekkanal.id)//GweepCreative
    message.channel.send(cfx1)//GweepCreative
    //GweepCreative//GweepCreative
    //GweepCreative
  }//GweepCreative
  //GweepCreative
  if (args[0] == 'kapat') {
    //GweepCreative
    db.delete(`istekkanal${message.guild.id}`)//GweepCreative
    message.channel.send(cfx2)//GweepCreative
    //GweepCreative
  }//GweepCreative
  //GweepCreative
  //GweepCreative
};

//GweepCreative
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['ikanal'],
  permLevel: 0 
};

exports.help = {
  name: 'istek-kanal',
  description: 'CODEFENIX KOD PAYLASIM',
  usage: 'istek-kanal #kanal'
};
