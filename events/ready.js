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
            name: `Liber Botlist ♥`,
            type: 'watching'
        },
        status: 'online'
    })
    console.log(`[LiberCode Botlist]: Giriş Yaptı! Komutlar Yüklendi!`);
}