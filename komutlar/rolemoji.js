const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  let user = message.author
 // if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('<a:v16:556753819829141507> Bu komut için `Yönetici` izni **gerekiyor!**')
  if (!args[0]) return message.channel.send('**[**`aç`**,** `kapat` **veya** `otorol`**]** Yazmalısın!')
  
  if (args[0] == 'aç') {
    if (db.has(`kayıt_${message.guild.id}`)) return message.channel.send('Bu sunucuda **Emoji Rol Sistemi** zaten açık!')
 

  const cfx2 = new Discord.RichEmbed()
  .setDescription(`\`${user.tag}\` Lütfen isteğinizi belirtin.`)
  .setColor("#00ff88")
  .setFooter(`LiberCode | İstek Sistemi.`, client.user.avatarURL)
  
    let code = args.slice(0).join(' ');
   if (code.length < 1) return message.channel.send(cfx2);
  if (message.author) {
  
      await db.set(`kayıt_${message.guild.id}`, 'acik')
      message.channel.send(`\`\`${code}\`\``).then(async m => {
        await db.set(`kayıtmesaj_${message.guild.id}`, m.id)
        m.react('🇹🇷')
      })
      message.channel.send('Başarıyla **Emoji Rol Sistemi** kuruldu!')
    
  } else if (args[0] == 'kapat') {
    if (!db.has(`kayıt_${message.guild.id}`)) return message.channel.send('Bu sunucuda **Emoji Rol** zaten kapalı!')
    let bos;
    await db.delete(`kayıt_${message.guild.id}`)
    await db.delete(`kayıtmesaj_${message.guild.id}`)
    message.channel.send('Emoji Rol Sistemi başarıyla **kapatıldı!**')
  } else if (args[0] == 'otorol') {
    if (!db.has(`kayıt_${message.guild.id}`)) return message.channel.send('Bu sunucuda **Emoji Rol** kapalı! Otorol için açmak **gerekir!**')
    let rol = message.mentions.roles.first()
    if (!rol) return message.channel.send('Lütfen bir rol **etiketleyin!**')
    
    await db.set(`kayıtotorol_${message.guild.id}`, rol.id)
    message.channel.send('Emoji Rol Sistemi için otorol başarıyla **ayarlandı!**')
  } else return message.channel.send('**[**`aç`**,** `kapat` **veya** `otorol`**]** Yazmalısın!')

}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'emoji',
  description: '',
  usage: ''
};
 