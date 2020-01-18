const chalk = require('chalk');
const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
client.user.setPresence({
        game: {
            name: `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcı!`,
            type: 'watching'
        },
        status: 'online'
    })
    console.log(`[LiberCode Botlist]: Giriş Yaptı! Komutlar Yüklendi!`);
}