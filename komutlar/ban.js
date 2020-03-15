const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require("../ayarlar.json");


var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`ban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Kimi banlayacağını yazmalısın.').catch(console.error);
   if (reason.length < 1) return message.reply('Ban sebebini yazmalısın.');
  if (message.mentions.users.size < 1) return message.reply('Kimi banlayacağını yazmalısın.').catch(console.error);
  message.guild.ban(user, 2);
  const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
.addField(`:bangbang:  **BAN** :bangbang:`, `\`\`${user.tag}(${user.id})\`\` **Adlı Kişi Banlandı!**`)
  .setFooter(`LiberCode | Ban Sistem`)
  .setThumbnail(`https://cdn.discordapp.com/attachments/663035553448460329/663041540041474081/a_bbf8aec9ad6f9a9d423dfb6f3681eb97.gif`)
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'ban [kullanıcı] [sebep]'
};
