const Discord = require('discord.js');

exports.run = function(client, message) {
  
  /////////////////////Config

 var logkanali = "true"; //log kanalı kullanılacak ise true yapın kullanılmayacaksa false yapın
var logkanalid = "669936526725218334"   
  var guildid = "669638506909401118" // Kullanılacak Sunucu

///////////////// Ana Kod
  
 
  var role = message.guild.roles.find(role => role.id === "669933748955119635"); 
  message.member.removeRole(role);
  message.channel.send(`✅ Partner Rolün Başarıyla Geri Alındı!`);
  client.channels.get(logkanalid).send("✅  | " + message.author +" Adlı Kullanıcının Partner Rolü Başarıyla Alındı!")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pal',],
  permLevel: 0
};

exports.help = {
  name: 'partner-al',
  description: '',
  usage: ''
};