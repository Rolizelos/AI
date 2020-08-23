const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const bergy = new Discord.RichEmbed()
.setColor("GREEN")//GweepCreative
.setAuthor(message.guild.name, message.guild.avatarURL)//GweepCreative
.setThumbnail(message.guild.iconURL)  //GweepCreative
.setDescription(`
${client.emojis.get("EMOJİ ID")} | **Sunucudaki \`Toplam Üye\` Sayısı:** \`${message.guild.memberCount}\`
${client.emojis.get("EMOJİ ID")} | **Sunucudaki \`Online\` Sayısı:** \`${message.guild.members.filter(x => x.user.presence.status === 'online').size}\`
${client.emojis.get("EMOJİ ID")} | **Sunucudaki \`idle\` Sayısı:** \`${message.guild.members.filter(x => x.user.presence.status === 'idle').size}\`
${client.emojis.get("EMOJİ ID")} | **Sunucudaki \`Dnd\` Sayısı:** \`${message.guild.members.filter(x => x.user.presence.status === 'dnd').size}\`
${client.emojis.get("EMOJİ ID")} | **Sunucudaki \`Offline\` Sayısı:** \`${message.guild.members.filter(x => x.user.presence.status === 'offline').size}\`
`)//GweepCreative
  .setFooter(`Komutu Kullanan: ${message.author.tag}`, message.author.avatarURL)   
  message.channel.sendEmbed(bergy);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
//GweepCreative
exports.help = {
  name: "say"
};
