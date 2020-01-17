const Discord = require('discord.js');
const client = new Discord.Client();
var randomstring = require('randomstring');

exports.run = (client, message, args) => {
  
  let length = args.slice(0).join(' ');
  if (length.length < 1) return message.channel.send(`Şifre Uzunluğunuz 1'Den Uzun Olmalıdır!`);
  
  const şifre = new Discord.RichEmbed()
   .setDescription(
            randomstring.generate({
            length: `${length}`,
            charset: 'alphabetic'
}))
  

  
 
  
  
  var user = message.author
  

  
   

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rastgeleşifre', 'rastgeleşifre', 'rastgeleşifre', 'rastgeleşifre'],
  permLevel: 0
};

exports.help = {
  name: 'şifre',
  description: 'random şifre atar',
  usage: 'rastgeleşifre'
};