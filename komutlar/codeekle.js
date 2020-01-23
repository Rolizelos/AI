const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kanal = args[0]
    let code = args[1]
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Bunun için gerekli iznin yok')
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("Botun yetkisi yok")
    if (kanal.length < 1 || !kanal) return message.reply('Lütfen oluşturacağım kanalın adını yaz.');
    if (code.length < 1) return message.reply(`kodunuzu yazınız!`)
  message.delete();
if (message.guild.channels.find(a => a.name === "JavaScript")) {
message.guild.createChannel(kanal, {type: "text", parent: message.guild.channels.find(a => a.name === "JavaScript")}).then(c => c.send(`${code}`))  
message.channel.send("Kanal Oluşturuldu")
} else {
return message.reply("JavaScript adında bir kategori yok!")

    
  

  
 }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'aç',
  description: 'Bir ses kanalı açar',
  usage: 'ses-kanal-aç [açmak istediğiniz kanalın adı]'
};