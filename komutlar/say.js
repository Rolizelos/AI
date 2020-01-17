const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const bergy = new Discord.RichEmbed()
.setColor("GREEN")
.setAuthor(message.guild.name, message.guild.iconURL)
.setThumbnail(message.guild.iconURL)  
.setDescription(`**Sunucudaki Toplam Üye Sayısı:** \`${message.guild.memberCount}\`
**Sunucudaki Offline Sayısı:** \`${message.guild.members.filter(x => x.user.presence.status === 'offline').size}\`
**Sunucudaki Online Sayısı:** \`${message.guild.members.filter(x => x.user.presence.status === 'online').size}\`
**Sunucudaki Bot Sayısı:** \`${message.guild.members.filter( member => member.user.bot).size}\`
`)
  message.channel.sendEmbed(bergy);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "say",
  description: "${prefix}say",
  usage: "say"
};
//By Bergy#9999