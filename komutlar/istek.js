const Discord = require('discord.js');
const db = require('quick.db');
const a = require('../ayarlar.json') 
 
exports.run = async function(client, message, args) {
  
  if(message.channel.id != "669656220893839370") return message.channel.send(':x: **Bu Komutudu <#669656220893839370> Kanalında Kullan!**').then(n => n.delete(5000));
  
  
  message.channel.bulkDelete(1)
  let user = message.author
    
  const cfx1 = new Discord.RichEmbed()
  .setDescription(`**İstek Kanalı Ayarlanmamış!** \n\n **Ayarlamak İçin:** \`${a.prefix}istek-kanal ayarla #kanal\``)
  .setColor("#00ff88")
  .setFooter(`ARK | İstek Sistemi.`, client.user.avatarURL)
  const cfx2 = new Discord.RichEmbed()
  .setDescription(`\`${user.tag}\` Lütfen isteğinizi belirtin.`)
  .setColor("#00ff88")
  .setFooter(`ARK | İstek Sistemi.`, client.user.avatarURL)

  const cfx4 = new Discord.RichEmbed()
  .setDescription(`\`${user.tag}\` İsteğin bildirildi!`)
  .setColor("#00ff88")
  .setFooter(`ARK | İstek Sistemi.`, client.user.avatarURL)

  
  
  
    let cfxistekkanal = await db.fetch(`istekkanal${message.guild.id}`)
    let chan = message.guild.channels.find('id', cfxistekkanal)
    let code = args.slice(0).join(' ');
    if (!cfxistekkanal) return message.channel.send(cfx1)
    if (code.length < 1) return message.channel.send(cfx2);
  if (message.author) {

//CodeFENIX // CFX




db.set(`emo${message.author.id}`, message.author.id)
    let emo = await db.fetch(`emo${message.author.id}`)
//CodeFENIX //CFX
    chan.send(`<@&669663626314907659>`).then(m => {
chan.send(new Discord.RichEmbed()
.setColor("#00ff88")
.addField(`\n\nKullanıcı Adı`, message.author.username,true)
.addField(`Kullanıcı ID`,message.author.id,true)
.addField("**İstek Kod**", `\`${code}\``)
.setThumbnail(message.author.avatarURL))

      .then(async function(sentEmbed) {
     //CodeFENIX //CFX
        const emojideistir = ["✅", "❎", "🔒", "⏰"];
        const filter = (reaction, user) =>
     //CodeFENIX //CFX 
          emojideistir.includes(reaction.emoji.name) &&
          user.id === "522138336056573972" || "497674151251804160";
     //CodeFENIX //CFX 
        await sentEmbed.react(emojideistir[0]).catch(function() {});
        await sentEmbed.react(emojideistir[1]).catch(function() {});
        await sentEmbed.react(emojideistir[2]).catch(function() {});
        await sentEmbed.react(emojideistir[3]).catch(function() {});
              var reactions = sentEmbed.createReactionCollector(filter, {
        });
 reactions.on("collect", async function (reaction) {
				if (reaction.emoji.name === "✅") {          
          sentEmbed.edit(`<@&647135745521221632> \n\n ` + `\`${msg.author.tag}\` ` + code + `\n\n **İsteğinde Bulundu.** \n\n [ :white_check_mark: KABUL EDİLDİ]`)
        }
   if (reaction.emoji.name === "❎") {         
     sentEmbed.edit(`<@&647135745521221632> \n\n ` + `\`${msg.author.tag}\` ` + code + `\n\n **İsteğinde Bulundu.** \n\n [ ❎ RED EDİLDİ]`)     
   }   
   if (reaction.emoji.name === "🔒") {          
    sentEmbed.edit(`<@&647135745521221632> \n\n ` + `\`${msg.author.tag}\` ` + code + `\n\n **İsteğinde Bulundu.** \n\n [ 🔒 EKLENDI]`)     
   }   
   if (reaction.emoji.name === "⏰") {     
    sentEmbed.edit(`<@&647135745521221632> \n\n ` + `\`${msg.author.tag}\` ` + code + `\n\n **İsteğinde Bulundu.** \n\n [ ⏰ BEKLEMEDE]`)          
   }})})}});
message.author.send(cfx4).then(m => {
  m.delete(300000)
})

}};

// CodeFENIX // CFX
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'istek',
  description: 'CODEFENIX KOD PAYLASIM',
  usage: 'istek <istediğiniz>'
};
