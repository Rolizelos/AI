const Discord = require('discord.js');//GweepCreative
const moment = require('moment');//GweepCreative
//GweepCreative
exports.run = (client, message, args) => {
message.channel.sendMessage(' **Botun yeniden başlatılmasına onay veriyorsanız 10 saniye içinde `başlat` yazın.** ')//GweepCreative
.then(() => {//GweepCreative
  message.channel.awaitMessages(response => response.content === "başlat", {//GweepCreative
    max: 1,//GweepCreative
    time: 10000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage(`**Bot yeniden başlatılıyor...**`).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot yeniden başlatılıyor...`)//GweepCreative
      process.exit(1);//GweepCreative
    }).catch(console.error)//GweepCreative
    })//GweepCreative
    .catch(() => {//GweepCreative
      message.channel.sendMessage('Yeniden başlatma işlemi iptal edildi.');//GweepCreative
    });//GweepCreative
});//GweepCreative//GweepCreative
};//GweepCreative

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yenile'],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: '[SAHİP KOMUTU!]',
  usage: 'reboot'
};