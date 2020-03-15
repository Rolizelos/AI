const Discord = require('discord.js');

exports.run = (client, message, args) => {
  message.channel.bulkDelete(1)
  
   if (!message.member.roles.find('id', '678165769963700224')) return message.channel.send('Bu Kodu Kullanabilmek İçin \`\`Code Sharer\`\` Rolüne Sahip Olmalısın!');
  
  
   let kanal = '📁'+args[0]
  let code = args.slice(1).join(' ');
  if (!kanal) return message.channel.send("Kanal İsmi Yazmalısın!");
  if (!code) return message.channel.send("Kodunu Yazmalısın!");
  message.delete();
if (message.guild.channels.find(a => a.id === "688788941310001199")) {
message.guild.createChannel(kanal, {type: "text", parent: message.guild.channels.find(a => a.id === "688788941310001199")}).then(c => c.send(



`**ARK SUNUCUSU KOD PAYLAŞIM KANALI!**\n
**${message.author} Tarafından \`\`${kanal}\`\` İsimli Kod Eklendi! ${message.author} Teşekkür Ederiz! :heart:\n\n
${client.emojis.get("678184744537686017")} İşte Kod;**


${code}


**:heart: Sayın Kullanıcılar Kodda Herhangi Bir Hata Varsa <#678169836832030720> Kanalı Yardımıyla Yetkililere İletin!\n:heart: İyi Günler!**`))

  
message.reply(`${client.emojis.get("688789528856625165")} **Kodunuz Başarıyla Eklendi!\n Eklenen Kanalın İsmi:** \`\`${kanal}\`\` `)
} else {
return message.reply("<#688788941310001199> adında bir kategori yok!")
   if (message.content.toLowerCase().startsWith(prefix + `kapat`)) {
    if (!message.channel.name.startsWith(`destek-`))
      return message.channel.send(`Bu komut sadece Destek Talebi kanallarında kullanılabilir!`);

    var deneme = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`Destek Talebi Kapatma İşlemi`)
      .setDescription(`Destek talebini kapatmayı onaylamak için, \n10 saniye içinde \`evet\` yazınız.`)
      .setFooter(`${client.user.username} | Destek Sistemi`);
    message.channel.send(deneme).then(m => {
      message.channel
        .awaitMessages(response => response.content === "evet", {
          max: 1,
          time: 10000,
          errors: ["time"]
        })
        .then(collected => {
          message.channel.delete();

})};

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