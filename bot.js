const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
  
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 210000);
//Bu Bölümleri Değiştirmeyin
// ________________________________________________________________
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const ms = require('ms');
const moment = require('moment');
const db = require('quick.db');
const Jimp = require('jimp');          fs

require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(aliases => {
      client.aliases.set(aliases, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

  client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
  return; }
  let permLevel = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permLevel = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permLevel = 3;
  if (message.author.id === ayarlar.sahip) permLevel = 4;
  return permLevel
  };

//------------------------------------------

client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length >0) {
    if (db.fetch(`capslock_${msg.guild.id}`)) {
      let caps = msg.content.toUpperCase();
      if (msg.content == caps) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
          if (!msg.mentions.users.first()) {
            msg.delete();
            return msg.channel
              .send(`✋ Lütfen Büyük Harf Kullanma!`)
              .then(m => m.delete(5000));
          }
        }
      }
    }
  }
});

//OTO TAG ---------------------------------------------------------

client.on('guildMemberAdd', async member => {
  let cfxtag2 = await db.fetch(`cfxtag${member.guild.id}`)
  var cfxtag = [];
  if(cfxtag2 == null) cfxtag = `${member.user.username}`
  else cfxtag = `${cfxtag2} ${member.user.username}`  
  member.setNickname(`${cfxtag}`)
});



//KAYIT -------------------------------------------------------------------

client.on("guildMemberAdd", async member => {
  if (db.has(`kayıt_${member.guild.id}`)) {
    let srol = await db.fetch(`kayıtrol_${member.guild.id}`)
    if (!srol) return
    await member.addRole(srol)
  }
})

client.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD'){
        let channel = client.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
        
          if (db.has(`kayıt_${msg.guild.id}`)) {
            if (user.id != client.user.id){
              let mesaj = db.get(`kayıtmesaj_${msg.guild.id}`)
              let srol = db.get(`kayıtrol_${msg.guild.id}`)
              if (msg.id == mesaj) {
                var roleObj = msg.guild.roles.get(srol);
                var memberObj = msg.guild.members.get(user.id);
                    memberObj.removeRole(roleObj)
                if (db.has(`kayıtotorol_${msg.guild.id}`)) {
                  memberObj.addRole(db.get(`kayıtotorol_${msg.guild.id}`))
                } 
              }
            }
          }
        })
        }
});

//fake ayrıl katıl
client.on('message', async message => {
if (message.content === '!gir') { // - yerine prefixi yaz
  client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
    }
});
client.on('message', async message => {
    if (message.content === '!çık') { // - yerine prefixi yaz
        client.emit('guildMemberRemove', message.member || await message.guild.fetchMember(message.author));
    }
}); 
   

// Main Dosyanız.
client.on('guildMemberAdd', async member => {
  let member2 = member.user
    let zaman = new Date().getTime() - member2.createdAt.getTime()
var user = member2   
var cfxzaman = [];
if(zaman < 432000) {
  cfxzaman = '🛑| Şüpheli Gözüküyor!'
} else {
  cfxzaman = '🟩 | Güvenli Gözüküyor!'
}

let zaman1 = new Date().getTime() - user.createdAt.getTime()
const gecen = moment.duration(zaman1).format(`DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`)
 
  let dbayarfalanfilan = await db.fetch(`cfxdbayar${member.guild.id}`)
  let message =  member.guild.channels.find(x => x.id === dbayarfalanfilan)

  const bergy = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setColor('RED')
  .setDescription(`${client.emojis.get("665930842786365473")}Hoşgeldin ${member} Seninle Beraber ${message.guild.memberCount} Kişiyiz! \n${client.emojis.get("665930842786365473")}Kaydının Yapılması İçin sesli odaya geçip ses vermen gerekli! \n${client.emojis.get("665930842786365473")}Hesap Kuruluş Zamanı: ${gecen} \n${client.emojis.get("665930842786365473")}Bu Kullanıcı: \`${cfxzaman}\` \n${client.emojis.get("665930842786365473")}<@&666656114095554560> Rolündeki Yetkililer Seninle İlgilenecektir! `)
  .setFooter(message.guild.name, message.guild.iconURL)
  message.send(bergy)

})

client.on("message", async msg => {  
const diauyetekst = new Discord.RichEmbed()
.setDescription(`** :gem: Diamond Üyemiz Aramıza Katıldı!**`)
.setColor("#c987ff")
let zamanasimi = 300000
let dialar = await db.fetch(`cfxz${msg.author.id}`)
let diadb = await db.fetch(`diasure${msg.author.id}`);
if (dialar == 'diamond') {  
if (diadb !== null && zamanasimi - (Date.now() - diadb) > 0) {
let time = ms(zamanasimi - (Date.now() - diadb)); } else {
if(msg.author.bot) return;   
if (msg.content.length > 1) {
db.set(`diasure${msg.author.id}`, Date.now());
msg.channel.send(diauyetekst).then(msg => { msg.delete(10000) })}}}})



client.on("guildMemberAdd", member => {
let user = client.users.get(member.id);
const kurulus = new Date().getTime() - user.createdAt.getTime();
if ( kurulus < 259200000)
member.addRole(`666656114095554560`)
return member.send(`Hesabınız 3 günden önce açıldığı için Cezalı'ya atıldınız. Yetkililere bildirebilirisiniz.`)
}
);


client.on('message', msg => {
  const reason = msg.content.split(" ").slice(1).join(" ");
    if (msg.channel.name== 'destek')  { 
    const hatay = new Discord.RichEmbed()
    .addField(" Hata ", `Bu Sunucuda \`Destek Ekibi\` Adında Bir Rol Yok!`)
    .setColor("RANDOM")
    
    if (!msg.guild.roles.exists("name", "Destek Ekibi")) return msg.author.send(hatay) + msg.guild.owner.send(`${msg.guild.name} Adlı Sunucunda, \`Destek\` Adlı Bir Rol Olmadığı İçin, Hiçkimse Destek Talebi Açamıyor!`);
    if(msg.guild.channels.find('name', 'Talepler')) {
      msg.guild.createChannel(`destek-${msg.author.id}`, "text").then(c => {
      const category = msg.guild.channels.find('name', 'Talepler')
      c.setParent(category.id)
      let role = msg.guild.roles.find("name", "Destek Ekibi");
      let role2 = msg.guild.roles.find("name", "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(msg.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
        
        let anan = msg.guild.roles.get("668434895181316119").members.map(x => {
msg.guild.members.get(x.id).username +"#"+ msg.guild.members.get(x.id).discriminator
})

      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`${client.user.username} | Destek Sistemi`)
      .addField(`Merhaba ${msg.author.username}!`, `Destek Yetkilileri burada seninle ilgilenecektir. \nDestek talebini kapatmak için \`${prefix}kapat\` yazabilirsin.`)
      .addField(`» Talep Konusu/Sebebi:`, `${msg.content}`, true)
   
      .addField(`» Kullanıcı:`, `<@${msg.author.id}>`, true)
      .setFooter(`${client.user.username} | Destek Sistemi`)
      .setTimestamp()
      c.send({ embed: embed });
      }).catch(console.error);
    }
  }
});
  
client.on("message", message => {
if (message.content.toLowerCase().startsWith(prefix + `kapat`)) {
    if (!message.channel.name.startsWith(`destek-`)) return message.channel.send(`Bu komut sadece Destek Talebi kanallarında kullanılablir!`);

    var deneme = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Destek Talebi Kapatma İşlemi`)
    .setDescription(`Destek talebini kapatmayı onaylamak için, \n10 saniye içinde \`evet\` yazınız.`)
    .setFooter(`${client.user.username} | Destek Sistemi`)
    message.channel.send(deneme)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Destek Talebi kapatma isteğin zaman aşımına uğradı!').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}
});


client.login(ayarlar.token);