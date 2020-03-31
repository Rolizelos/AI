const Discord = require('discord.js');
exports.run = function(client, message, args) {
let a = message.guild.channels.find(x => x.id === '693559264652034209')
let b = a.children.map(x => x.name)
let c = message.guild.channels.find(x => x.id === '693564774885228595')
let d = c.children.map(x => x.name )
let e = message.guild.channels.find(x => x.id === '693564894041210913')
let f = e.children.map(x => x.name ).join(``)
message.author.send(new Discord.RichEmbed()
  .setTitle(`${message.guild.name} Adlı Sunucudaki Premium Kodlar!`)
  .addField(`** **`, `\`Ücretsiz\` **__JavaScript__** Kategorisi;\n ${b.join('\n')}`)
  .addField(`** **`, `\`7 İnvite\` **__JavaScript++__** Kategorisi;\n ${d.join('\n')}`)
  .addField(`** **`, `\`10 İnvite\`  **__Altyapı__** Kategorisi;\n ${f.split('📁')}`)
  .setColor("GOLD"))
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kodlar',
};