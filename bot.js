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

   //dcs ekibi

  
    if (botrol) {
      if (member.user.bot) {
        member.addRole(botrol2)
        client.channels.get("693527212216942612").send(` \`${member.user.tag}\` adlı bota \`${botrol2.name}\` rolü verildi.`)
      }
  
    }
});


var stl = "693532845175734332";

client.on("raw", async event => {
  var starchan = client.channels.get(stl);
  if (event.t === "MESSAGE_REACTION_ADD") {
    if (event.d.emoji.name !== "⭐") return;
    var chan = client.channels.get(event.d.channel_id);
    var msg = await chan.fetchMessage(event.d.message_id);
    var rs = msg.reactions.get("⭐").users.size;
    if(msg.author.bot) return;
   if(!msg.guild) return;
    if (rs >= 1) {
      var embed = new Discord.RichEmbed();
      embed.setAuthor(msg.author.tag, msg.author.avatarURL)
      embed.setTitle(`Yıldızlanan Mesaj!`)
      embed.setURL(`https://discordapp.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`)
      embed.addField("Kanal: ", chan, true);
      embed.addField("Mesaj sahibi: ", msg.author.tag, true);
      embed.setColor("GOLD");
      embed.setThumbnail(msg.author.avatarURL)
      embed.setTimestamp()
      embed.addField(
        "**Mesaja git:** ",
        `[Zıpla](https://discordapp.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id})`,
        true
      );

      if (msg.content) {
        embed.addField("Mesaj:", msg.content, true);
      }
      if (msg.attachments.size > 0) {
        embed.setImage(msg.attachments.first().url);
      }

      embed.setFooter(`⭐ ${rs} | ${msg.author.id}`);

      if (db.has(`star.${msg.id}`) === true) {
        var msj = await starchan.fetchMessage(db.get(`star.${msg.id}`));
        msj.edit(embed);
      } else {
        starchan.send(embed).then(mesaj => {
          db.set(`star.${msg.id}`, mesaj.id);
        });
      }
    }
  } else if (event.t === "MESSAGE_REACTION_REMOVE") {
    if (event.d.emoji.name !== "⭐") return;
    var chan = client.channels.get(event.d.channel_id);
    var msg = await chan.fetchMessage(event.d.message_id);
    if (!db.fetch(`star.${msg.id}`)) return;
    var lmsg = await starchan.fetchMessage(db.get(`star.${msg.id}`));
    var rs = msg.reactions.get("⭐") ? msg.reactions.get("⭐").users.size : 0;

    if (rs >= 1) {
      var embed = new Discord.RichEmbed();
      embed.setAuthor(msg.author.tag, msg.author.avatarURL)
      embed.setTitle(`Yıldızlanan Mesaj!`)
      embed.setURL(`https://discordapp.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`)
      embed.addField("Kanal: ", chan, true);
      embed.addField("Mesaj sahibi: ", msg.author.tag, true);
      embed.setColor("GOLD");
      embed.setThumbnail(msg.author.avatarURL)
      embed.setTimestamp()
      embed.addField(
        "**Mesaja git:** ",
        `[Zıpla](https://discordapp.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id})`,
        true
      );
      if (msg.content) {
        embed.addField("Mesaj:", msg.content, true);
      }
      if (msg.attachments.size > 0) {
        embed.setImage(msg.attachments.first().url);
      }

      embed.setFooter(`⭐ ${rs} | ${msg.author.id}`);

      if (db.fetch(`star.${msg.id}`) === true) {
        lmsg.edit(embed);
      }
    } else {
      db.delete(`star.${msg.id}`);
      lmsg.delete();
    }
  }
});

//---------------------------------
client.on("guildMemberAdd", async member => {
member.send("Seni Aramızda Görmekten Mutluluk Duyuyoruz! <#693532845175734332> Kanalında `!js` Yazarak JavaScript Rolüne Sahip Olabilirsin! Tekrardan <#693532845175734332> Kanalında `!roller` Yazarak İnvite İle Alabileceğin Rolleri Görebilirsin! İnşallah Seversin Sunucumuzu <3 Junex Development Ekibi!")
})

client.on("ready", () => {
  setInterval(() => {
    let botdurum = client.channels.find(c => c.id === "693553095325515916");
    let guild = botdurum.guild.id
    const botistatistik =  new Discord.RichEmbed()
      .setColor("RED")
      .setThumbnail(botdurum.guild.iconURL)
      .setTitle(`${botdurum.guild.name}  Sunucu İstatistik!`)
      .addField(`** **`, `**Sunucu:** \`${botdurum.guild.name}\``)
      .addField(`** **`, `**Sunucu Sahibi:** <@${botdurum.guild.owner.id}>`)
      .addField(`** **`, `**Sunucudaki Üye Sayısı:** \`${botdurum.guild.memberCount}\``)
      .setFooter(`${botdurum.guild.name} İstatistik!`, botdurum.guild.iconURL)
      .setTimestamp(); 
    botdurum.send(botistatistik)
    }, 200000);
});  



client.login(process.env.TOKEN);