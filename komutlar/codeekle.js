const Discord = require('discord.js');

exports.run = (client, message, args) => {
  message.channel.bulkDelete(1)
  
   if (!message.member.roles.find(``) return message.channel.send('Bu Kodu Kullanabilmek İçin \`\`SUPPORT\`\` Rolüne Sahip Olmalısın!');
  
  
   let kanal = args[0]
  let code = args.slice(1).join(' ');
  if (!kanal) return message.channel.send("Kanal İsmi Yazmalısın!");
  if (!code) return message.channel.send("Kodunu Yazmalısın!");
  message.delete();
if (message.guild.channels.find(a => a.name === "●▬▬▬▬๑「JavaScript」๑▬▬▬▬▬●")) {
message.guild.createChannel(kanal, {type: "text", parent: message.guild.channels.find(a => a.name === "●▬▬▬▬๑「JavaScript」๑▬▬▬▬▬●")}).then(c => c.send(



`**ARK SUNUCUSU KOD PAYLAŞIM KANALI!**\n
**${message.author} Tarafından \`\`${kanal}\`\` İsimli Kod Eklendi! ${message.author} Teşşekkür Ederiz! :heart:\n\n
${client.emojis.get("678184744537686017")} İşte Kod;**


${code}


**:heart: Sayın Kullanıcılar Kodda Herhangi Bir Hata Varsa <#678169836832030720> Kanalı Yardımıyla Yetkililere İletin!\n:heart: İyi Günler!**`))

  
message.reply(`${client.emojis.get("678184744537686017")} **Kodunuz Başarıyla Eklendi!\n Eklenen Kanalın İsmi:** \`\`${kanal}\`\` `).then(n => n.delete(5000));
} else {
return message.reply("\`●▬▬▬▬๑「JavaScript」๑▬▬▬▬▬●\` adında bir kategori yok!")

    
  

  
 }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kodekle',
  description: 'by bergy',
  usage: 'by bergy'
};