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

//OROSPU COCU KAŞAR PİÇ KURULARINI ENGELLEME SİSTEMİ! (BUNU SİLERSEN SENDE OROSPU COCUSUN!)----------------------


client.on('guildMemberAdd', member => {

  if(member.user.username.includes('.dcw')) {
    member.ban('dcw üyesi')
  }
})

client.on('ready', ()=>{
client.channels.get('688795572907540557').join()
})

client.on("guildMemberAdd", member => {
let botrol = member.guild.roles.get(x => x.id === "672193071630385153")
if (member.user.bot) {
  member.addRole(botrol.id)
}

   }) 

//OROSPU COCU KAŞAR PİÇ KURULARINI ENGELLEME SİSTEMİ! (BUNU SİLERSEN SENDE OROSPU COCUSUN!)----------------------







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
\n${client.emojis.get("665930842786365473")}<#669655941397872680> **Kanalına \`!js\` Yazarak \`JavaScript\` Rolünü Alabilirsin!
\n${client.emojis.get("665930842786365473")}10 Davetle Erişebileceğin \`JavaScript+\` Rolündeki Kodları Görmek İçin \`!js+\` Yazman Yeterli!**`)
  .setFooter(message.guild.name, message.guild.iconURL)
  message.send(bergy)
  message.send(`${member} **Hoşgeldin!**`)

})


const invites = {};


const wait = require('util').promisify(setTimeout);

client.on('ready', () => {

  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {

  
  
 
  member.guild.fetchInvites().then(guildInvites => {
    
    
    
    if (db.has(`dKanal_${member.guild.id}`) === false) return
    const channel = db.fetch(`dKanal_${member.guild.id}`).replace("<#", "").replace(">", "")
    
    const ei = invites[member.guild.id];
  
    invites[member.guild.id] = guildInvites;
 
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);

    const davetçi = client.users.get(invite.inviter.id);
    
    
     db.add(`davet_${invite.inviter.id + member.guild.id}`,1)
let bal  = db.fetch(`davet_${invite.inviter.id + member.guild.id}`)
let bbmsj = db.fetch(`bbmesaj_${member.guild.id}`)
   member.guild.channels.get(channel).send(`${bbmsj}`)
  })
});
client.on("guildMemberRemove", async member => {

    member.guild.fetchInvites().then(guildInvites => {

      const ei = invites[member.guild.id];
  
    invites[member.guild.id] = guildInvites;
 
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);

       db.subtract(`davet_${invite.inviter.id + member.guild.id}`,1)
    })
})


        

client.login(process.env.TOKEN);