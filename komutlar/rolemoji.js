const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

module.exports = async message => {
  let client = message.client;
   let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) { 
let veri = await db.fetch(`botbakım`)
if(veri) {
 if(message.author.id !== "655124789018492947") {
 
 let codeming = new Discord.RichEmbed()
 .setTitle('Bakımdayız :x:')
 .setDescription('Bot,şu an kurucu tarafından bakıma alındı.')
 .addField('Bakım Sebebi:', veri)
 .setColor('RED')
message.channel.send(codeming).then(m => m.delete(10000))
 return
 } 
  
}

    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

}; 