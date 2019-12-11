const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
message.channel.sendMessage(' **Botun yeniden başlatılmasına onay veriyorsanız 10 saniye içinde `başlat` yazın.** ')
.then(() => {
  message.channel.awaitMessages(response => response.content === "başlat", {
    max: 1,
    time: 10000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage(`**Bot yeniden başlatılıyor...**`).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot yeniden başlatılıyor...`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage('Yeniden başlatma işlemi iptal edildi.');
    });
});
};

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