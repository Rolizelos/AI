// Komutlar.
const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message ,args) => {
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