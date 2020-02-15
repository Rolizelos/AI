const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const bergy = new Discord.RichEmbed()
.setColor("GREEN")
.setAuthor(message.guild.name, message.guild.avatarURL)
.setThumbnail(message.guild.iconURL)  
.setDescription(`
${client.emojis.get("665930842786365473")} | **Sunucudaki \`Toplam Üye\` Sayısı:** \`${message.guild.memberCount}\`
${client.emojis.get("667740719351463936")} | **Sunucudaki \`Online\` Sayısı:** \`${message.guild.members.filter(x => x.user.presence.status === 'online').size}\`
${client.emojis.get("667740716813910037")} | **Sunucudaki \`idle\` Sayısı:** \`${message.guild.members.filter(x => x.user.presence.status === 'idle').size}\`
${client.emojis.get("667740717929594950")} | **Sunucudaki \`Dnd\` Sayısı:** \`${message.guild.members.filter(x => x.user.presence.status === 'dnd').size}\`
${client.emojis.get("667740715970854913")} | **Sunucudaki \`Offline\` Sayısı:** \`${message.guild.members.filter(x => x.user.presence.status === 'offline').size}\`
`)
  .setFooter(`Komutu Kullanan: ${message.author.tag}`, message.author.avatarURL)   
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