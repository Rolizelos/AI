const Discord = require('discord.js');
const db = require('quick.db')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
  
  /////////////////////Config

 var logkanali1 = "true"; //log kanalı kullanılacak ise true yapın kullanılmayacaksa false yapın
var logkanalid1 = "666670859439702026"   //Log Kanalı Id
  var guildid = "665929879199416320" // Kullanılacak Sunucu
///////////////// Ana Kod
  
  if (!message.member.roles.find('name', 'Yönetici')) return message.channel.send('Dostum Bu Komutu Kullanabilmek İçin **Yönetici** Yetkisine Sahip Olman Gerek');
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!user) return message.reply("**Dostum Etiket Atmayı Unuttun**");
const alinacak = message.guild.roles.find('name', 'Kayıtsız Üye');
const verilecek = message.guild.roles.find('name', 'Üye');
//-------------------------------------------------------------------
if(logkanali1 == "true") {
message.guild.channels.find(x => x.id === logkanalid1).send(`${client.emojis.get("EMOJİ ID")} ${user.tag} **Sunucumuza Başarıyla Kayıt Oldu!**\n **${user.tag} \`\`${message.guild.name}\`\`\ Sunucusuna Hoşgeldin!**`)}
//-------------------------------------------------------------------
const ky = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription(`**${user}, Kaydını Tamamladım ! İyi Eğlenceler   :asoult_tik: \n **`)
        .setColor('BLACK')
        .setTimestamp()
        message.channel.send(ky)
        message.react('✅')
    user.addRole(verilecek)
  user.removeRole(alinacak)
  
  
} 
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["erkek"],
    permLevel: 0
}
exports.help = {
    name: 'erkek',
    description: 'erkek',
    usage: 'erkek'
}