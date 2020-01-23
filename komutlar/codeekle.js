



      message.guild.createChannel(kanal, 'text')}
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Bunun için gerekli iznin yok'); // Bunu Başkasıda Kullana Bilmesi İçin Kanalları Yönet Yetkisi Verin
    if (kanal.length < 1) return message.reply('Lütfen oluşturacağım kanalın adını yaz.');
    let guild = message.guild;
    let kanal = args.slice(0).join(' ');
  aliases: ['ses-kanal-aç'],
  description: 'Bir ses kanalı açar',
  enabled: true,
  guildOnly: false,
  message.channel.send("Ses Kanalı Oluşturuldu")
  message.delete();
  name: 'aç',
  permLevel: 3
  usage: 'ses-kanal-aç [açmak istediğiniz kanalın adı]'
 if(message.guild.channels.find('name', 'JavaScript')) {
const Discord = require('discord.js');
exports.conf = {
exports.help = {
exports.run = (client, message, args) => {
};
};
};---------------