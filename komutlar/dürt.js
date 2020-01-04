const Discord = require('discord.js');
exports.run = (client, message, args) => {
      
   if (!message.guild) {
  return message.reply(':no_entry_sign: Bu komut, özel mesajlarda kullanılamamakta!'); }
 if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.reply(':fire: Yeterli yetki, bulunmakata!');
  }
  let guild = message.guild;
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Kimi uyarmam gerekiyor?').catch(console.error);
  message.delete();
  message.reply('Kişi, başarılı bir şekilde uyarıldı!')
  const bergy = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle(`**FaceBook Dürtülme Sistemi!**`)
  .setTimestamp()
  .setDescription(`**\`${user.tag}\` Sizi Dürttü!**`)
  .setFooter('Facebook Dürt Sistemi', client.user.avatarURL)
  return user.send(bergy);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pm','öm'],
  permlevel: 4
};

exports.help = {
  name: 'dürt',
  description: 'Belirtilen kullanıcıyı, dürter',
  usage: 'dürt bergy'
};