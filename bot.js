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

//SAYAÇ -------------------------------------------------------------

client.on("message", async message => {
    let sayac = JSON.parse(fs.readFileSync("./sayac.json", "utf8"));
    if(sayac[message.guild.id]) {
        if(sayac[message.guild.id].sayi <= message.guild.members.size) {
            const embed = new Discord.RichEmbed()
                .setDescription(`**_:tada: Tebrikler, başarılı bir şekilde ${sayac[message.guild.id].sayi} kullanıcıya ulaştık! :100:_** `)
                .setColor("0x808080")
                .setTimestamp()
            message.channel.send({embed})
            delete sayac[message.guild.id].sayi;
            delete sayac[message.guild.id];
            fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), (err) => {
                console.log(err)
            })
        }
    }
})
client.on("guildMemberRemove", async member => {

        let sayac = JSON.parse(fs.readFileSync("./sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription(``)
 .setColor("RED")
    .setFooter("", client.user.avatarURL);
 
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`:outbox_tray: **__${member.user.tag}__** sunucudan Ayrıldı! **__${sayac[member.guild.id].sayi}__** Kişi Olmamıza **__${sayac[member.guild.id].sayi - member.guild.memberCount}__** Kişi Kaldı. **__${member.guild.members.size}__** Kişiyiz.`);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }
 
});
client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription(``)
 .setColor("GREEN")
    .setFooter("", client.user.avatarURL);
 
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`:inbox_tray: **__${member.user.tag}__** Sunucuya Katıldı! **__${sayac[member.guild.id].sayi}__** Kişi Olmamıza **__${sayac[member.guild.id].sayi - member.guild.memberCount}__** Kişi Kaldı.**__${member.guild.members.size}__** Kişiyiz.` );
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }
 
});

//KAYIT -------------------------------------------------------------------

var rol = {
  "sunucu": "654375129282904075",
  "kayıtlı": "654379551002198016",
  "kayıtsız": "657582742787325953"
}
const pw = require('generate-password')
client.on('guildMemberAdd', member => {
  member.send('Sunucuya hoşgeldin! Kayıt olmak için !kayıt yazarak bu mesajı cevapla!')
})
client.on('message', message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") {
    if(message.content ===  "!kayıt") {
      var password = pw.generate({
        numbers: true,
        uppercase: true
      })
      var { createCanvas, loadImage } = require('canvas')
        var canvas = createCanvas(750,250)
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = `#0000001`;
        ctx.font = '56px Impact';
        ctx.textAlign = "left";
        ctx.fillText(`${password}`, 100, 150)
        
      message.channel.send('Aşağıda yer alan kodu aynen cevap kısmına yazınız', {files:[{attachment:canvas.toBuffer(),name:"kayit.png"}]})
      db.set(`kod.${message.author.id}`, password)
    } else {
      var kod = db.fetch(`kod.${message.author.id}`)
      if(!kod) return message.channel.send('${prefix}kayıt yazarak bir kod alınız!')
      else {
        var member = client.guilds.get(rol.sunucu).members.get(message.author.id)
        member.addRole(rol.kayıtlı)
        member.removeRole(rol.kayıtsız)
        message.channel.send('Kayıt Başarılı! Sunucuya erişiminiz açılıyor!')
        db.delete(`kod.${message.author.id}`)
      }
    }
  }
})

client.login(ayarlar.token);