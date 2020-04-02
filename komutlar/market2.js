const Discord = require('discord.js');
const db = require('quick.db');
// ONLY CODE
exports.run = async (client, message, args) => {
  let istek = args[0]
  let user = message.mentions.users.first() || message.member;
  let gold = await db.fetch(`gold${message.member.id}`);
  let para = await db.fetch(`para${message.author.id}`);
  
 let eklenecekpara = args[1]

message.channel.send("amk ağla")
  db.add(`para${message.author.id}`, eklenecekpara)
  
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,

};

exports.help = {
  name: 'adminpuan'
};

// ONLY CODEp