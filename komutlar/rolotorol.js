const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  let user = message.author

 {
    if (!db.has(`kayıt_${message.guild.id}`)) return message.channel.send('Bu sunucuda **Emoji Rol** kapalı! Otorol için açmak **gerekir!**')
    let rol = message.mentions.roles.first()
    if (!rol) return message.channel.send('Lütfen bir rol **etiketleyin!**')
    
    await db.set(`kayıtotorol_${message.guild.id}`, rol.id)
    message.channel.send('Emoji Rol Sistemi için otorol başarıyla **ayarlandı!**').then(n => n.delete(5000));
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'emojiotorol',
  description: '',
  usage: ''
};
 