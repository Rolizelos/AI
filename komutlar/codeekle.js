const Discord = require('discord.js');

exports.run = (client, message, args) => {
   let kanal = args[0]
  let code = args.slice(1).join(' ');
  if (!kanal) return message.channel.send("Kanal İsmi Yazmalısın!");
  if (!code) return message.channel.send("Kodunu Yazmalısın!");
  message.delete();
if (message.guild.channels.find(a => a.name === "JavaScript")) {
message.guild.createChannel(kanal, {type: "text", parent: message.guild.channels.find(a => a.name === "JavaScript")}).then(c => c.send(



`**ARK SUNUCUSU KOD PAYLAŞIM KANALI!**\n
**${message.author} Tarafından \`\`${kanal}\`\` İsimli Kod Eklendi! ${message.author} Teşşekkür Ederiz! :heart:\n\n
${client.emojis.get("669699664039116800")} İşte Kod;**

${code`

Sayın Kullanıcılar Kodda Herhangi Bir Hata Varsa <#669656253806673939> Kanalı Yardımıyla Yetkililere İletin!\n:heart: İyi Günler!**`))

  
message.channel.send("Kanal Oluşturuldu")
} else {
return message.reply("JavaScript adında bir kategori yok!")

    
  

  
 }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'aç',
  description: 'Bir ses kanalı açar',
  usage: 'ses-kanal-aç [açmak istediğiniz kanalın adı]'
};c