const Discord = require('discord.js');

exports.run = (client, message, args) => {
  message.channel.bulkDelete(1)
  
   if (!message.member.roles.find('id', '678178183698317315')) return message.channel.send('Bu Kodu Kullanabilmek İçin \`\`SUPPORT\`\` Rolüne Sahip Olmalısın!');
  
  
   let kanal = args[0]
  let code = args.slice(1).join(' ');
  if (!kanal) return message.channel.send("Kanal İsmi Yazmalısın!");
  if (!code) return message.channel.send("Kodunu Yazmalısın!");
  message.delete();
if (message.guild.channels.find(a => a.name === "●▬▬▬▬๑「JavaScript+」๑▬▬▬▬▬●")) {
message.guild.createChannel(kanal, {type: "text", parent: message.guild.channels.find(a => a.name === "●▬▬▬▬๑「JavaScript+」๑▬▬▬▬▬●")}).then(c => c.send(



`**ARK SUNUCUSU KOD PAYLAŞIM KANALI! JavaScript+ KATEGORİSİ!**\n
**${message.author} Tarafından \`\`${kanal}\`\` İsimli Kod Eklendi! ${message.author} Teşşekkür Ederiz! :heart:\n\n
${client.emojis.get("669699664039116800")} İşte Kod;**


${code}


**:heart: Sayın Kullanıcılar Kodda Herhangi Bir Hata Varsa <#669656253806673939> Kanalı Yardımıyla Yetkililere İletin!\n:heart: İyi Günler!**`))

  
message.reply(`${client.emojis.get("669699664039116800")} **Kodunuz Başarıyla Eklendi!\n Eklenen Kanalın İsmi:** \`\`${kanal}\`\` `).then(n => n.delete(5000));
} else {
return message.reply("JavaScript+ adında bir kategori yok!")

    
  

  
 }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kodekle+',
  description: 'by bergy',
  usage: 'by bergy'
};