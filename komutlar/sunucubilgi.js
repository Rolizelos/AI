const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, params) => {
  
    let guild = message.guild.createdAt
  
  
   var tarih = ''
            if(moment(guild.createdAt).format('MM') === '01') {
                var tarih = `${moment(guild.createdAt).format('DD')} Ocak ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(guild.createdAt).format('MM') === '02') {
                var tarih = `${moment(guild.createdAt).format('DD')} Şubat ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(guild.createdAt).format('MM') === '03') {
                var tarih = `${moment(guild.createdAt).format('DD')} Mart ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(guild.createdAt).format('MM') === '04') {
                var tarih = `${moment(guild.createdAt).format('DD')} Nisan ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(guild.createdAt).format('MM') === '05') {
                var tarih = `${moment(guild.createdAt).format('DD')} Mayıs ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(guild.createdAt).format('MM') === '06') {
                var tarih = `${moment(guild.createdAt).format('DD')} Haziran ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(guild.createdAt).format('MM') === '07') {
                var tarih = `${moment(guild.createdAt).format('DD')} Temmuz ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(guild.createdAt).format('MM') === '08') {
                var tarih = `${moment(guild.createdAt).format('DD')} Ağustos ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(guild.createdAt).format('MM') === '09') {
                var tarih = `${moment(guild.createdAt).format('DD')} Eylül ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(guild.createdAt).format('MM') === '10') {
                var tarih = `${moment(guild.createdAt).format('DD')} Ekim ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(guild.createdAt).format('MM') === '11') {
                var tarih = `${moment(guild.createdAt).format('DD')} Kasım ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(guild.createdAt).format('MM') === '12') {
                var tarih = `${moment(guild.createdAt).format('DD')} Aralık ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
            }
  

    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`sunucubilgi` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('🤳🏼 İsmi:', message.guild.name, true)
    .addField('🐥Kimliği:', message.guild.id, true)
    .addField('Bölgesi:', message.guild.region, true)
    .addField('Sahibi:', message.guild.owner, true)
    .addField('Üyeler:', `${message.guild.members.filter( member => member.user.bot).size} bot / ${message.guild.memberCount} üye`, true)
    .addField('Varsayılan rol:', message.guild.defaultRole, true)
    .addField('Kanallar:', `${message.guild.channels.filter(chan => chan.type === 'voice').size} sesli / ${message.guild.channels.filter(chan => chan.type === 'text').size} metin`, true)
    .addField('Kanal sayısı:', message.guild.channels.size, true)
    .addField('AFK kanalı:', message.guild.afkChannel, true)
    .addField('Oluşturma tarihi:', `${tarih}`)
    .setFooter('LiberCode/Botlist | SunucuBilgi Sistem', message.guild.iconURL)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu', 'sunucu bilgi', 'sbilgi','server','sinfo'],
  permLevel: 0
};

exports.help = {
  name: 'sunucu',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucubilgi'
};