const Discord = require('discord.js');
const db = require('quick.db');
const a = require('../ayarlar.json') 
 
exports.run = async function(client, message, args) {
  
  if(message.channel.id != "669656253806673939") return message.channel.send(':x: **Bu Komutudu <#669656253806673939> Kanalında Kullan!**').then(n => n.delete(5000));
  
  
  message.channel.bulkDelete(1)
  let user = message.author
    
  const cfx1 = new Discord.RichEmbed()
  .setDescription(`**Hatalı-Kod-Log Kanalı Ayarlanmamış!** \n\n **Ayarlamak İçin:** \`${a.prefix}istek-kanal ayarla #kanal\``)
  .setColor("#00ff88")
  .setFooter(`ARK | Hatalı-Kod Sistemi.`, client.user.avatarURL)
  const cfx2 = new Discord.RichEmbed()
  .setDescription(`\`${user.tag}\` Lütfen isteğinizi belirtin.`)
  .setColor("#00ff88")
  .setFooter(`ARK | Hatalı-Kod Sistemi.`, client.user.avatarURL)

  const cfx4 = new Discord.RichEmbed()
  .setDescription(`\`${user.tag}\` Hatalı Kod Bildirimin Yetkililere Ulaştı! Yakında Düzeltilir!`)
  .setColor("#00ff88")
  .setFooter(`ARK | Hatalı-Kod Sistemi.`, client.user.avatarURL)

  
  
  
    let cfxhatalıkanal = await db.fetch(`hatalıkanal${message.guild.id}`)
    let chan = message.guild.channels.find('id', cfxhatalıkanal)
    let code = args.slice(0).join(' ');
    if (!cfxhatalıkanal) return message.channel.send(cfx1)
    if (code.length < 1) return message.channel.send(cfx2);
  if (message.author) {

//CodeFENIX // CFX



message.author.send(cfx4).then(m => {
  m.delete(300000)
})
//CodeFENIX //CFX
    chan.send(`<@&669653086306041868>`).then(m => {
chan.send(new Discord.RichEmbed()
.setColor("#00ff88")
.addField(`\n\nKullanıcı Adı`, message.author.username,true)
.addField(`Kullanıcı ID`,message.author.id,true)
.addField("**Hatalı Kod**", `\`${code}\``)
.setThumbnail(message.author.avatarURL)).then(x => {
x.react("✅")
return message.author.send(`İsteğin Onaylandı!`)
x.react("❌")
return message.author.send(`İsteğin Reddedildi!`)
})
})


}};

// CodeFENIX // CFX
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'hatalı-kod',
  description: 'CODEFENIX KOD PAYLASIM',
  usage: 'istek <istediğiniz>'
};
