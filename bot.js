const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(`Yeniden Aktif...`);
    response.sendStatus(200);
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


//REKLAM-KORUMA -------------------------------------------------------------------------------------

client.on("message", async msg => {
let cfxy = await db.fetch(`reklam_${msg.guild.id}`)
if (!msg.member.hasPermission("BAN_MEMBERS")) {
if (cfxy == 'Açık') {
        const reklam = ["discord.gg","https//",".com",".xyz",".net", ".com.tr", ".glitch.me" , ".org", ".net", ".site", ".co", ".dx.am", ".tk", ".cf", ".ga"];
        if (reklam.some(word => msg.content.includes(word))) {
          try {          
         const cfxiy = new Discord.RichEmbed()
          .setTitle("Sunucunda " + msg.author.tag + " Reklam Yapıyor!")
          .setColor(0x00AE86)
          .setDescription(msg.author + "kullanıcısı " + msg.guild + " sunucusunda reklam yaptı.")
          .addField("Kullanıcının mesajı:", "**" + msg.content + "**")  
  msg.guild.owner.send(cfxiy)                           
               msg.delete(); 
                  return;             
          } catch(err) {
            console.log(err);
          }
        } } else if (cfxy == 'Kapalı') {

}
}
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
    let author = "₣│Ƨƛ│JaimiTR#8142"
    let zaman = new Date().getTime() - member2.createdAt.getTime()
var user = member   
var cfxzaman = [];
if(zaman < 604800000) {
  cfxzaman = `🛑| Şüpheli`
} else {
  cfxzaman = `🟩 | Güvenli`
}

let zaman1 = new Date().getTime() - user.createdAt.getTime()
const gecen = moment.duration(zaman1).format("D")
 
  let dbayarfalanfilan = await db.fetch(`cfxdbayar${member.guild.id}`)
  let message =  member.guild.channels.find(x => x.id === dbayarfalanfilan)

  message.send(`${client.emojis.get("665930842786365473")}Hoşgeldin ${member} Seninle Beraber ${message.guild.memberCount} Kişiyiz! \n${client.emojis.get("665930842786365473")}Kaydının Yapılması İçin sesli odaya geçip ses vermen gerekli! \n${client.emojis.get("665930842786365473")}Hesap Kuruluş Zamanı: ${gecen} \n${client.emojis.get("665930842786365473")}Bu Kullanıcı: \`\`${cfxzaman}\`\` \n${client.emojis.get("665930842786365473")}<@&666656114095554560> Rolündeki Yetkililer Seninle İlgilenecektir! `)

})


  client.login(ayarlar.token);