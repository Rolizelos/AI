const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
 // if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('<a:v16:556753819829141507> Bu komut için `Yönetici` izni **gerekiyor!**')
  if (!args[0]) return message.channel.send('**[**`aç`**,** `kapat` **veya** `otorol`**]** Yazmalısın!')
  
  if (args[0] == 'aç') {
    if (db.has(`kayıt_${message.guild.id}`)) return message.channel.send('Bu sunucuda **Kayıt Sistemi** zaten açık!')
    let rol;
    try{
        rol = await message.guild.createRole({
        name: `♥ | UnRegistered`,
        color: "pink",
        permissions:[]
        })

    message.guild.channels.forEach((channel, id) => {
         channel.overwritePermissions(rol, {
              VIEW_CHANNEL: false,
              CONNECT: false
            });
          });
    }catch (e){
      return message.channel.send('Gerekli rolleri ve izinleri **oluşturamıyorum.** Lütfen yetkimin tam olduğundan emin olun.')
    }
    
    message.guild.createChannel("🔥│regi̇ster", "text").then(async o => {
      let role = message.guild.roles.find("name", "@everyone");
       await o.overwritePermissions(role, {
            VIEW_CHANNEL: false,
            SEND_MESSAGES: false,
            CONNECT: false
     })
      o.overwritePermissions(rol, {
        VIEW_CHANNEL: true,
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      })
    
      await db.set(`kayıt_${message.guild.id}`, 'acik')
      await db.set(`kayıtrol_${message.guild.id}`, rol.id)
      o.send('**TR | Kayıt Olmak İçin Lütfen Tıklayınız!**\n**US | Please click here to register!**').then(async m => {
        await db.set(`kayıtmesaj_${message.guild.id}`, m.id)
        m.react('🇹🇷')
      })
      message.channel.send('Başarıyla **Kayıt Sistemi** kuruldu!')
    })
  } else if (args[0] == 'kapat') {
    if (!db.has(`kayıt_${message.guild.id}`)) return message.channel.send('Bu sunucuda **Kayıt Sistemi** zaten kapalı!')
    let bos;
    let i = await db.fetch(`kayıtrol_${message.guild.id}`)
    if (!i) bos = 'uhm'
    let iiii = await message.guild.roles.get(i)
    if (!iiii) bos = 'uhmmmm'
    await iiii.delete()
    await db.delete(`kayıt_${message.guild.id}`)
    await db.delete(`kayıtrol_${message.guild.id}`)
    await db.delete(`kayıtmesaj_${message.guild.id}`)
    message.channel.send('Kayıt Sistemi başarıyla **kapatıldı!**')
  } else if (args[0] == 'otorol') {
    if (!db.has(`kayıt_${message.guild.id}`)) return message.channel.send('Bu sunucuda **Kayıt Sistemi** kapalı! Otorol için açmak **gerekir!**')
    let rol = message.mentions.roles.first()
    if (!rol) return message.channel.send('Lütfen bir rol **etiketleyin!**')
    
    await db.set(`kayıtotorol_${message.guild.id}`, rol.id)
    message.channel.send('Kayıt için otorol başarıyla **ayarlandı!**')
  } else return message.channel.send('**[**`aç`**,** `kapat` **veya** `otorol`**]** Yazmalısın!')
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
 