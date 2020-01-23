const Discord = require('discord.js');

exports.run = function(client, message) {
 
  /////////////////////Config

 var logkanali = "true"; //log kanalı kullanılacak ise true yapın kullanılmayacaksa false yapın
var logkanalid = "669936526725218334"   
  var guildid = "669638506909401118" // Kullanılacak Sunucu

///////////////// Ana Kod
  
  
  
  var role = message.guild.roles.find(role => role.id === "669933748955119635"); 
  if (message.member.roles.has(role.id)) return message.channel.send("⛔ Partner Rolüne Sahipsin!")
  message.member.addRole(role);
  message.channel.send(`✅ Partner Rolün Başarıyla Verildi!`);
  client.channels.get(logkanalid).send("✅  | " + message.author +" Adlı Kullanıcı Başarılı Bir Şekilde **Partner** Adlı Rolü Aldı!")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pver',],
  permLevel: 0
};

exports.help = {
  name: 'partner-ver',
  description: '',
  usage: ''
};