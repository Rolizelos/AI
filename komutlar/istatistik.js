const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");
const os = require('os');


exports.run = (client, message) => {
  let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
	const istatistikozel = new Discord.RichEmbed()
    .setColor(0x36393F)
    .setThumbnail(client.user.avatarURL) 
  .setDescription("**LiberCode Bot İstatistik**")
  .addField(` Bot Sahibi:`, `<@655124789018492947>`, true)
  .addField(` Geliştirici:`, `<@647123320872894485>`, true)
  .addField(' CPU:', `${os.cpus().map(i => `${i.model}`)[0]}`, true)
	.addField(" Bellek Kullanımı:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField(" Sunucu Sayısı:", `${client.guilds.size.toLocaleString()}`, true)
  .addField(" Kullanıcı Sayısı:", `${client.users.size}`, true)
  .addField(" Toplam Kullanıcı Sayısı:", `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField(" Kanal Sayısı:", `${client.channels.size.toLocaleString()}`, true)
  .addField(` Ne Kadar Süredir Aktif:`, `${duration}`, true)
  .addField(" Ping:", `${client.ping}`, true)
  .addField(" Discord.js Sürümü:", `${Discord.version}`, true)
  .addField(`Destek Sunucusu`, `[Tıkla](https://discord.gg/RqyVnMH)`, true)
  message.channel.sendEmbed(istatistikozel)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['i'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'istatistik'
};