const Discord = require('discord.js');
const db = require('quick.db');
const a = require('../ayarlar.json') 
 
exports.run = async function(client, message, args) {
  let user = message.author
    

  const b1 = new Discord.RichEmbed()
  .setDescription(`\`${user.tag}\` Başvuru Soru 1`)
  .setColor("#00ff88")
  .setFooter(`Başvuru Sistemi`, client.user.avatarURL)

message.channel.send(b1)
.then(() => {
message.channel.awaitMessages(response =>response.content ==='istiyorum', {
max: 1,
time: 30000,
errors: ['time'],
})




});
};

// CodeFENIX // CFX
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'başvuru'
};