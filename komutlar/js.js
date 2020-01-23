const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {

  if(message.channel.id != "669655941397872680") return message.channel.send(':x: **Bu Komutudu <#669655941397872680> Kanalında Kullan!**').then(n => n.delete(5000));
  
  message.channel.bulkDelete(1)

/////////////////////Config

 var logkanali = "true"; //log kanalı kullanılacak ise true yapın kullanılmayacaksa false yapın
 var rolismi = "JavaScript" // Verilecek Rol Ismi
var logkanalid = "669671496532230145"   
  var guildid = "669638506909401118" // Kullanılacak Sunucu

///////////////// Ana Kod
message.channel.bulkDelete(1)
  var role = message.guild.roles.find(i => i.name === rolismi); 
  if (message.member.roles.has(role.id)) return message.channel.send("❌ Maalesef, Bu Role Sahipsin").then(n => n.delete(5000));
  if(!role) return message.channel.send(rolismi + "Adından Bir Rol Bulamıyorum Lütfen <@"+ayarlar.sahip+"> 'e ulaş" )
  if(logkanali == "true") {
message.member.addRole(role);
message.channel.send("✅  Başarıyla `JavaScript` Rolün verildi!").then(n => n.delete(5000));
client.channels.get(logkanalid).send("✅  | " + message.author +" Adlı Kullanıcı Başarılı Bir Şekilde **"+rolismi+"** Adlı Rolü Aldı!")
}else {
message.channel.send('✅  Başarıyla `JavaScript` Rolün verildi!').then(n => n.delete(5000));
message.member.addRole(role);
}
  
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['javascript',],
  permLevel: 0
};

exports.help = {
  name: 'js',
  description: 'JavaScript Rolünü Verir',
  usage: 'js'
};