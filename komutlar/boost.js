// Komutlar.
const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message ,args) => {
  
  
  const cfxyaptı = new Discord.MessageEmbed()
  .setTitle(`**\`Otorol Bilgi;\`**`)
  .setDescription(`** ** \n **Ayarlamak İçin:** \`${ayarlar.prefix}otorol ayarla @rol #kanal\` \n\n **Kapatmak İçin:** \`${ayarlar.prefix}otorol kapat\``)
  .setColor("#00ff88")
  .setFooter(`Okeanos | Otorol Sistemi.`, client.user.avatarURL())
  message.channel.send(cfxyaptı)
  
  let cfxkanal = message.mentions.channels.first()
  if(args[0] == 'ayarla') {
  db.set(`cfxdbayar${message.guild.id}`, cfxkanal.id)
  message.channel.send(cfxkanal.name)
    return;
  }
  if(args[0] == 'kapat') {
  db.delete(`cfxdbayar${message.guild.id}`)
  message.channel.send(`sıfırlandı!`)
    return;
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};
  //CodeFENIX //CFX
exports.help = {
  name: "gkanal",
  by_codefenix: "copyright JaimiTR"
};