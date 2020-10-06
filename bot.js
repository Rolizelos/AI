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

client.on("guildMemberAdd", async member => {

  let botrol = await db.fetch(`bototorol_${member.guild.id}`);
  let botrol2 = member.guild.roles.find('id', botrol);
  if (!botrol2) return;
    if (botrol) {
      if (member.user.bot) {
        member.addRole(botrol2)
        client.channels.get("EMOJİ ID").send(` \`${member.user.tag}\` adlı bota \`${botrol2.name}\` rolü verildi.`)
      }
  
    }
});


//---------------------------------
client.on("guildMemberAdd", async member => {
member.send("SUNUCUYA KATILAN KİŞİYE ATILACAK MEAJ")
})



client.on("ready", () => {
  setInterval(() => {
    let botdurum = client.channels.find(c => c.id === "KANAL ID");
    let guild = botdurum.guild.id
    botdurum.send(new Discord.RichEmbed()
      .setColor("RED")
      .setThumbnail(botdurum.guild.iconURL)
      .setTitle(`${botdurum.guild.name}  Sunucu İstatistik!`)
      .addField(`** **`, `**Sunucu:** \`${botdurum.guild.name}\``)
      .addField(`** **`, `**Sunucu Sahibi:** <@${botdurum.guild.owner.id}>`)
      .addField(`** **`, `**Sunucudaki Üye Sayısı:** \`${botdurum.guild.memberCount}\``)
      .setFooter(`${botdurum.guild.name} İstatistik!`, botdurum.guild.iconURL)
      .setTimestamp())
    }, 200000);
});  



client.login(ayarlar.token);