const Discord = require('discord.js');
const db = require('quick.db')
const client = new Discord.Client();
exports.run = async (client, message, bot, args) => {
  
  /////////////////////Config
 var logkanali1 = "true"; //LOG KANALI KULLANCILACAK İSE TRUE YAPIN KULLANILMAYACAK İSE FALSE YAPIN!
var logkanalid1 = "LOG KANALI ID"   //Log KANALININ IDSİ
  var guildid = "SUNUCU ID" // KULLANILACAK SUNUCU IDSİ
///////////////// Ana Kod
  
  if (!message.member.roles.find('name', 'Yönetici')) return message.channel.send('Dostum Bu Komutu Kullanabilmek İçin **Yönetici** Yetkisine Sahip Olman Gerek');
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!user) return message.reply("**Dostum Etiket Atmayı Unuttun**");
const alinacak = message.guild.roles.find('name', 'Kayıtsız Üye');
const verilecek = message.guild.roles.find('name', 'Erkek');
//-------------------------------------------------------------------
if(logkanali1 == "true") {
message.guild.channels.find(x => x.id === logkanalid1).send(`${client.emojis.get("EMOJİ ID")} ${user} **Sunucumuza Başarıyla Kayıt Oldu!**\n **${user} \`\`${message.guild.name}\`\`\ Sunucusuna Hoşgeldin!**`)}
//-------------------------------------------------------------------
const ky = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription(`**${user}, Kaydını Tamamladım ! İyi Eğlenceler ${client.emojis.get("EMOJİ ID")}**`)
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
//BY BERGY 
//ÖNEMLİ NOTLAR: 'Kayıtsız Üye' Ve 'Erkek' Rollerinizin Olması Lazımdır! Komutu Kullanabilmek İçinde 'Yönetici' Rolünün Olması Lazımdır!