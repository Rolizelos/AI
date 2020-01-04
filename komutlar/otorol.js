const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  if (!message.guild) {
    const pm = new Discord.RichEmbed()
    .setColor(0x00ff88)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Bunu Yapamam!')
    return message.author.sendEmbed(pm); }

  if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':x: Otorol ayarlamak için `Rolleri Yönet` yetkisine sahip olman gerek.')

  const cfxyaptı = new Discord.RichEmbed()
  .setTitle(`**\`Otorol Bilgi;\`**`)
  .setDescription(`** ** \n **Ayarlamak İçin:** \`${ayarlar.prefix}otorol ayarla @rol #kanal\` \n\n **Kapatmak İçin:** \`${ayarlar.prefix}otorol kapat\``)
  .setColor("#00ff88")
  .setFooter(`LiberCode | Otorol Sistemi.`, client.user.avatarURL)
  
  if (!args[0]) return message.channel.send(cfxyaptı)
  if (args[0] == 'ayarla') {//CFX
  
  let cfx = message.mentions.roles.first() || message.guild.roles.get(args.join(' '))
  let cfxk;
  let cfxkh;
  
  if (!cfx) return message.channel.send(':x: Otorol ayarlamanız için bir rol etiketlemeniz gerek. `otorol ayarla @Üye #kanal`')
  else cfxk = message.mentions.roles.first().id
  
  let cfxl = message.mentions.roles.first().name  
  let cfxn = message.mentions.channels.first();
  
  if (!cfxn) return message.channel.send(':x: Otorol ayarlamanız için bir rol etiketlemeniz gerek. `otorol ayarla @Üye #kanal`')
    db.set(`otorolisim_${message.guild.id}`, cfxl)
  
  let i = await  db.set(`otorolKanal_${message.guild.id}`, message.mentions.channels.first().id)
  let cfxm = await db.set(`autoRole_${message.guild.id}`, cfxk)
  
  if (!message.guild.roles.get(cfxk)) return message.channel.send(":x: Etiketlediğiniz rolu bulamadım.")
    message.channel.send(`Otorol, <@&${cfxk}> Otorol kanalı <#${i}> olarak ayarlandı.`)      
  } 

  if (args[0] == 'kapat') {
    
    db.delete(`otorolisim_${message.guild.id}`)
    db.delete(`otorolKanal_${message.guild.id}`)
    db.delete(`autoRole_${message.guild.id}`)

    message.channel.send(`Otorol başarıyla kapatıldı.`)
  }
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 3
}
exports.help = {
    name: 'otorol',
    description: 'CODEFENIX KOD PAYLASIM',
    usage: 'otorol <@rol>'
}