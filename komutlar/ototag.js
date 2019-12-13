const Discord = require('discord.js');
const db = require('quick.db');
const { prefix } = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return;
  let tag = args.slice(0).join(' ');
  if(!args[0]) return message.channel.send(new Discord.RichEmbed().setDescription(`CodeFENIX OTOTAG SISTEMI \n\n ** **`).addField(`OtoTag Sistemini Aktif Etmek İçin;`, `${prefix}ototag -tagınız-`).addBlankField().addField(`OtoTag Sistemini DeAktif Etmek İçin;`, `${prefix}ototag kapat`, true).setColor('#c987ff').setFooter(`CodeFENIX| OtoTag Sistemi.`, client.user.avatarURL).addBlankField());
  if (args[0] == 'kapat') { db.delete(`cfxtag${message.guild.id}`) - message.channel.send(`CodeFENIX OtoTag Sistemi Kapatıldı`)
  return }
  if (!tag) return message.channel.send(`> Tagını Belirtmedin!`)
  db.set(`cfxtag${message.guild.id}`, tag)  
  message.channel.send('Ototag ``'+ tag +'`` olarak ayarlandı!')
}
exports.conf = { enabled: true, guildOnly: false, aliases: [], permLevel: 0 }
exports.help = { name: 'ototag', }