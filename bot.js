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


//OTOROL ----------------------------------------------------------------------------------------------

client.on('guildMemberAdd', async (member, guild, message) => {

 let cfxr = await  db.fetch(`otorolisim_${member.guild.id}`)
 let cfxo = await db.fetch(`autoRole_${member.guild.id}`)
 let cfxk = await db.fetch(`otorolKanal_${member.guild.id}`)
 
  if (!cfxk) return 

member.addRole(member.guild.roles.get(cfxo))
const codefenixkodpaylasim = new Discord.RichEmbed()
.setDescription(`**Sunucuya Giriş Yapan** \`\`${member.user.tag}\`\` **Kullanıcısına** \`\`${cfxr}\`\` **Rolü verildi.**`)
.setColor('0x00ff88') 
.setFooter(`FREE NİTRO | Otorol Sistemi `, client.user.avatarURL)
member.guild.channels.get(cfxk).send(codefenixkodpaylasim);   
//CFX

});

//------------------------------------------------------------------------------


client.login(ayarlar.token);