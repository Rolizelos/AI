const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {

  if(message.channel.id != "654376897412595723") return message.channel.send(':x: **Bu Komutudu <#654376897412595723> Kanalında Kullan!**');


  
/////////////////////Config

 var logkanali = "true"; //log kanalı kullanılacak ise true yapın kullanılmayacaksa false yapın
 var rolismi = "♣ | JavaScript" // Verilecek Rol Ismi
var logkanalid = "654378716016672805"   
let kanal = "654376897412595723"
  var guildid = "654375129282904075" // Kullanılacak Sunucu

///////////////// Ana Kod

  var role = message.guild.roles.find(i => i.name === rolismi); 
  if (message.member.roles.has(role.id)) return message.channel.send("❌ Maalesef, Bu Role Sahipsin")
  if(!role) return message.channel.send(rolismi + "Adından Bir Rol Bulamıyorum Lütfen <@"+ayarlar.sahip+"> 'e ulaş" )
  if(logkanali == "true") {
message.member.addRole(role);
message.channel.send("✅  Başarıyla `JavaScript` Rolün verildi!")
client.channels.get(logkanalid).send("✅  | " + message.author +" Adlı Kullanıcı Başarılı Bir Şekilde **"+rolismi+"** Adlı Rolü Aldı!")
}else {
message.channel.send('✅  Başarıyla `JavaScript` Rolün verildi!')
message.member.addRole(role);
}
  
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['javascript', 'de'],
  permLevel: 0
};

exports.help = {
  name: 'js',
  description: 'JavaScript Rolünü Verir',
  usage: 'js'
};