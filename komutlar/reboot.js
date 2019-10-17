
const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json")

exports.run = async (bot, message, args) => {
    if(message.author.id !== "ID") if(message.author.id !== "ID") return message.channel.send(":x: Bu Komutu kullanabileceğini mi sandın!")    
    message.channel.sendMessage(`**SISTEM YENIDEN BASLATILIYOR**...`).then(msg => {
    console.log(`CFX: yeniden başlatılıyor...`);
    process.exit(0);
  })
//CodeFENIX              
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
//CodeFENIX
exports.help = {
  name: 'reboot',
  description: 'Sistemi yeniden başlatır',
  usage: 'reboot'
};