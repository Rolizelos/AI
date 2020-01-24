const Discord = require('discord.js');

exports.run = (client, message, args) => {
  message.channel.bulkDelete(1)
  
   if (!message.member.roles.find('name', 'KOD PAYLAŞIMCI')) return message.channel.send('Bu Kodu Kullanabilmek İçin \`\`Kod Paylaşımcı\`\` Rolüne Sahip Olmalısın!');
  
  
   let kanal = args[0]
  let code = args.slice(1).join(' ');
  let description = args.slice(2).join(' ');
  if (!kanal) return message.channel.send("Kanal İsmi Yazmalısın!");
  if (!code) return message.channel.send("Kodunu Yazmalısın!");
  if (!description) return message.channel.send("Bir açıklama yazmayacanmı?")
  message.delete();
if (message.guild.channels.find(a => a.name === "JavaScript")) {
message.guild.createChannel(kanal, {type: "text", parent: message.guild.channels.find(a => a.name === "JavaScript")}).then(c => c.send(



`**ARK SUNUCUSU KOD PAYLAŞIM KANALI!**\n
**${message.author} Tarafından \`\`${kanal}\`\` İsimli Kod Eklendi! ${message.author} Teşşekkür Ederiz! :heart:\n\n
${client.emojis.get("669699664039116800")} İşte Kod;**


${code}

------------------------------------------------------
Komut Hakkında Açıklama: ${description}

**:heart: Sayın Kullanıcılar Kodda Herhangi Bir Hata Varsa <#669656253806673939> Kanalı Yardımıyla Yetkililere İletin!\n:heart: İyi Günler!**`))

  
message.reply(`${client.emojis.get("669699664039116800")} **Kodunuz Başarıyla Eklendi!\n Eklenen Kanalın İsmi:** \`\`${kanal}\`\` `).then(n => n.delete(5000));
} else {
return message.reply("JavaScript adında bir kategori yok!")

    
  

  
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