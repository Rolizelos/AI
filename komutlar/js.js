const Discord = require('discord.js');


exports.run = (client, message, args) => {
   message.member.addRole("654395894208397331") 
   const embed = new Discord.RichEmbed()
   .setColor('RED')         
.setTitle('Başarılı : :white_check_mark: ')
.setDescription(`${message.author.tag} Javascript Rolü Başarıyla Verildi`)
return message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["js"]
};

exports.help = {
  name: 'js',
  description: 'Send a Minecraft Achievement image to the channel',
  usage: 'mcödül Title|Text (/achievement Achievement Get|Used a Command!)'
};