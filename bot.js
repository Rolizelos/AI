const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
  
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);
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
  if (ayarlar.sahip.includes(message.author.id)) permLevel = 4;
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
  .setDescription(
`${client.emojis.get("665930842786365473")}Hoşgeldin ${member} Seninle Beraber ${message.guild.memberCount} Kişiyiz! 
\n${client.emojis.get("665930842786365473")}Hesap Kuruluş Zamanı: ${gecen} 
\n${client.emojis.get("665930842786365473")}Bu Kullanıcı: \`${cfxzaman}\` 
\n${client.emojis.get("665930842786365473")}<#669655941397872680> **Kanalına \`!js\` Yazarak \`JavaScript\` Rolünü Alabilirsin!** `)
  .setFooter(message.guild.name, message.guild.iconURL)
  message.send(bergy)
  message.send(`${member} **Hoşgeldin!**`)

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





client.login(process.env.TOKEN);