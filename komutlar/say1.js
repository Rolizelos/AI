//  \`
const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (client, message, args) => {
  const bergy = new Discord.RichEmbed()
.setColor("GREEN")
.setAuthor(client.user.tag, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)  
.setDescription(`
**Toplam Sunucu Sayısı:** \`${client.guilds.size}\`
**Toplam Kullanıcı Sayısı:** \`${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\`
**Toplam Kanal Sayısı:** \`${client.channels.size}\`
**Çalışma Süresi:** \`${moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]')}\``)
.setFooter(`${client.user.tag} İstatistikleri`)
  message.channel.sendEmbed(bergy);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "say1",
  description: "${prefix}say",
  usage: "say"
};
//By Bergy#9999