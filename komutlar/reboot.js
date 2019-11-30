const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json")

exports.run = async (bot, message, args) => {
    if(message.author.id !== "ID") if(message.author.id !== "ID") return message.channel.send(":x: Bu Komutu kullanabileceğini mi sandın!")    
//ID Yazan Yere Kendi ID nizi girmeniz gerekiyor.
    message.channel.sendMessage(`**SISTEM YENIDEN BASLATILIYOR**...`).then(msg => {
    console.log(`Yeniden başlatılıyor...`);
    process.exit(0);
  })
            
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'reboot',
  description: 'Sistemi yeniden başlatır',
  usage: 'reboot'
};