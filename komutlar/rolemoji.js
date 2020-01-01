const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  let user = message.author

  const bergy = new Discord.RichEmbed()
  .setDescription(`\`\`${user.tag}\`\` **Emoji Rol Komutları;** \`\`emoji aç/kapat/otorol\`\` **Emoji Rol Sistemini Açmak İçin; \`\`emoji aç 'açıklama'\`\`** `)
  .setColor("#00ff88")
  .setFooter(`Emoji Rol Sistemi`, client.user.avatarURL)
  
  
    let code = args.slice(1).join(' ');
   if (code.length < 1) return message.channel.send(bergy);
  if (message.author) {
  
      await db.set(`kayıt_${message.guild.id}`, 'acik')
      message.channel.send(`\`\`${code}\`\``).then(async m => {
        await db.set(`kayıtmesaj_${message.guild.id}`, m.id)
        m.react('🇹🇷')
      })

      message.channel.send('Başarıyla **Emoji Rol Sistemi** kuruldu!').then(n => n.delete(5000));
  
  if (args[2] == 'aç') {
    if (db.has(`kayıt_${message.guild.id}`)) return message.channel.send('Bu sunucuda **Emoji Rol Sistemi** zaten açık!')
 
      await db.set(`kayıt_${message.guild.id}`, 'acik')
      message.channel.send(`\`\`${code}\`\``).then(async m => {
        await db.set(`kayıtmesaj_${message.guild.id}`, m.id)
        m.react('🇹🇷')
      })
      message.channel.send('Başarıyla **Emoji Rol Sistemi** kuruldu!').then(n => n.delete(5000));
    
  } 
  }
};
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
 