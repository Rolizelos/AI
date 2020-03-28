const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {

  if(message.channel.id != "693532845175734332") return message.channel.send(':x: **Bu Komutudu <#693532845175734332> Kanalında Kullan!**').then(n => n.delete(5000));
  
  message.channel.bulkDelete(1)

/////////////////////Config

 var logkanali = "false"; //log kanalı kullanılacak ise true yapın kullanılmayacaksa false yapın
 var rolismi = "693562376674345070" // Verilecek Rol Ismi
var logkanalid = "688797347504717897"   
  var guildid = "678162896030531594" // Kullanılacak Sunucu

///////////////// Ana Kod
message.channel.bulkDelete(1)
  var role = message.guild.roles.find(i => i.id === "693562376674345070"); 
  if (message.member.roles.has(role.id)) return message.channel.send("❌ Maalesef, Bu Role Sahipsin").then(n => n.delete(5000));
  if(!role) return message.channel.send(`<@$693562376674345070>`, "Adında Bir Rol Bulamıyorum Lütfen <@"+ayarlar.sahip+"> 'e ulaş" )
  if(logkanali == "false") {
message.member.addRole(role);
message.channel.send("✅  Başarıyla <@&693562376674345070> Rolün verildi!").then(n => n.delete(5000));
client.channels.get(logkanalid).send("✅  | " + message.author +" Adlı Kullanıcı Başarılı Bir Şekilde **<@"+rolismi+">** Adlı Rolü Aldı!")
}else {
message.channel.send('✅  Başarıyla <@&693562376674345070> Rolün verildi!').then(n => n.delete(5000));
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