const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
if(!message.guild.member(message.author).roles.has('688759558231031941')) return message.reply('Bunu kullanmaya yetkin yok')
  
  let log = await db.fetch(`kodlog${message.guild.id}`)
  let cfxlog = message.mentions.channels.first()
   
if (args[0] == 'logkapat') {    
  db.delete(`kodlog${message.guild.id}`)
  message.channel.send(`Log Kapatıldı.`)
  return;
}
if (args[0] == 'logayarla') {  
  db.set(`kodlog${message.guild.id}`, cfxlog.id)
  message.channel.send(`Log ${cfxlog} olarak ayarlandı.`)
  return;
}

  if(args[0] == 'paylaş' && args[1] == 'basit'){
  let JS = message.guild.channels.find(x => x.id === "688788941310001199");
  message.guild.createChannel(args[2], "text").then(async JSCODE => {  
  let code = args.slice(3).join(' ');
  const cfx = new Discord.RichEmbed() 
  let logkanal = await db.fetch(`kodlog${message.guild.id}`)
  let kanalog = message.guild.channels.find('id', logkanal)  
  let gonderen = message.author  

  let role1 = message.guild.roles.find(x => x.name === "Kullanıcı");
  let role2 = message.guild.roles.find(x => x.name === "@everyone");        
      JSCODE.overwritePermissions(role2, {SEND_MESSAGES: false,READ_MESSAGES: false});
      JSCODE.overwritePermissions(role1, {SEND_MESSAGES: false,READ_MESSAGES: true});   
      JSCODE.setParent(JS)
      cfx.setDescription(`
\`${gonderen.tag}\`; \n
\`${args[2]}\` Kanalını oluşturdum ve belirttiğin kodu kanalın içine attım. \n
${JSCODE}`)
      cfx.setFooter(`© FENIX Development`)
      cfx.setColor("#00ff88")
      cfx.setTitle('Basit')

      message.channel.sendEmbed(cfx); 
db.set(`codekanal${message.guild.id}`, JSCODE.id)
let kanal = await db.fetch(`codekanal${message.guild.id}`)
let kanalg = message.guild.channels.find('id', kanal)
kanalg.send(code)
kanalog.send(new Discord.RichEmbed()
  .setTitle('Basit')
  .setDescription(`
\`${gonderen.tag}\` adlı yetkili tarafından **basit** kodlar kategorisinde,
` + JSCODE + ` kanalı oluşturuldu ve içerisine yeni kod eklendi.`)
  .setFooter(`© FENIX Development`)
  .setColor("#00ff88")) 
})
return;
}
  if(args[0] == 'paylaş' && args[1] == 'orta'){
  let JS = message.guild.channels.find(x => x.id === "688789268411580442");
  message.guild.createChannel(args[2], "text").then(async JSCODE => {  
  let code = args.slice(3).join(' ');
  const cfx = new Discord.RichEmbed() 
  let logkanal = await db.fetch(`kodlog${message.guild.id}`)
  let kanalog = message.guild.channels.find('id', logkanal)  
  let gonderen = message.author  
  let role1 = message.guild.roles.find(x => x.id === "678584042786127881");
  let role1_1 = message.guild.roles.find(x => x.id === "678368381136666635");
  let role2 = message.guild.roles.find(x => x.name === "@everyone");        
      JSCODE.overwritePermissions(role2, {SEND_MESSAGES: false,READ_MESSAGES: false});
      JSCODE.overwritePermissions(role1, {SEND_MESSAGES: false,READ_MESSAGES: true});
      JSCODE.overwritePermissions(role1_1, {SEND_MESSAGES: false,READ_MESSAGES: true});
      JSCODE.overwritePermissions(gonderen, {SEND_MESSAGES: true,READ_MESSAGES: true});
      JSCODE.setParent(JS)
      cfx.setDescription(`
\`${gonderen.tag}\`; \n
\`${args[2]}\` Kanalını oluşturdum ve belirttiğin kodu kanalın içine attım. \n
${JSCODE}`)
      cfx.setFooter(`© FENIX Development`)
      cfx.setColor("#fff000")
      cfx.setTitle('Orta seviye')
      message.channel.sendEmbed(cfx); 
db.set(`codekanal${message.guild.id}`, JSCODE.id)
let kanal = await db.fetch(`codekanal${message.guild.id}`)
let kanalg = message.guild.channels.find('id', kanal)
kanalg.send(code)
kanalog.send(new Discord.RichEmbed()
  .setTitle('Orta seviye')
  .setDescription(`
\`${gonderen.tag}\` adlı yetkili tarafından **orta seviye** kodlar kategorisinde,
` + JSCODE + ` kanalı oluşturuldu ve içerisine yeni kod eklendi.`)
  .setFooter(`© FENIX Development`)
  .setColor("#fff000"))
  })
return;
}
  if(args[0] == 'paylaş' && args[1] == 'zor'){
  let JS = message.guild.channels.find(x => x.id === "689808695730896919");
  message.guild.createChannel(args[2], "text").then(async JSCODE => {  
  let code = args.slice(3).join(' ');
  const cfx = new Discord.RichEmbed() 
  let logkanal = await db.fetch(`kodlog${message.guild.id}`)
  let kanalog = message.guild.channels.find('id', logkanal)  
  let gonderen = message.author  
  let role1 = message.guild.roles.find(x => x.id === "678368642093809694");
  let role1_1 = message.guild.roles.find(x => x.id === "678584251523923997");
  let role2 = message.guild.roles.find(x => x.name === "@everyone");        
      JSCODE.overwritePermissions(role2, {SEND_MESSAGES: false,READ_MESSAGES: false});
      JSCODE.overwritePermissions(role1, {SEND_MESSAGES: false,READ_MESSAGES: true});
      JSCODE.overwritePermissions(role1_1, {SEND_MESSAGES: false,READ_MESSAGES: true});
      JSCODE.overwritePermissions(gonderen, {SEND_MESSAGES: true,READ_MESSAGES: true});
      JSCODE.setParent(JS)
      cfx.setDescription(`
\`${gonderen.tag}\`; \n
\`${args[2]}\` Kanalını oluşturdum ve belirttiğin kodu kanalın içine attım. \n
${JSCODE}`)
      cfx.setFooter(`© FENIX Development`)
      cfx.setColor("#ff0000")
      cfx.setTitle('Zor seviye')
      message.channel.sendEmbed(cfx); 
db.set(`codekanal${message.guild.id}`, JSCODE.id)
let kanal = await db.fetch(`codekanal${message.guild.id}`)
let kanalg = message.guild.channels.find('id', kanal)  
kanalg.send(code)
kanalog.send(new Discord.RichEmbed()
  .setTitle('Zor seviye')
  .setDescription(`
\`${gonderen.tag}\` adlı yetkili tarafından **zor seviye** kodlar kategorisinde,
` + JSCODE + ` kanalı oluşturuldu ve içerisine yeni kod eklendi.`)
  .setFooter(`© FENIX Development`)
  .setColor("#ff0000"))
  })
return;
}
  }
exports.conf = { enabled: true, guildOnly: false, aliases: [], permLevel: 4 };
exports.help = { name: 'kod' };