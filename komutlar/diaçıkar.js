const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
 
let aydi = args[0]
let dia = message.guild.members.get(args[0]);
let cfxz = message.guild.roles.find(cfxz => cfxz.name === "Diamond");
  
  const cfx = new Discord.RichEmbed()
  .setColor("#c987ff")
  .setDescription(`**${dia}** artık **[ Diamond üye ]** değil!`)
      
  if (!aydi) return message.channel.send('Bir kullanıcının IDsini girmelisin?')
  
  db.delete(`cfxz${aydi}`)
  await(dia.removeRole(cfxz.id));
  message.channel.send(cfx)
}
exports.conf = { enabled: true, guildOnly: false, aliases: [], permLevel: 4 };
exports.help = { name: 'diaçıkar' };