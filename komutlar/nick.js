const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_NICKNAMES"))
    return message.channel.send(
      `❌ Bu Komutu Kullanabilmek için \`İsimleri Yönet\` Yetkisine Sahip Olmalısın!`
    );
  


  let user = message.mentions.users.first();
  let code = args.slice(0).join(' ');
  if (!code) return message.channel.send("❌ Bir İsim Yazmalısın!");
  message.author.setNickname(`${code} ${user.tag}`);
  
  const cfx2 = new Discord.RichEmbed()
  .setDescription(`\`${user.tag}\` Lütfen isteğinizi belirtin.`)
  .setColor("#00ff88")
  .setFooter(`LiberCode | İstek Sistemi.`, client.user.avatarURL)
  
  
  const embed = new Discord.RichEmbed()
    .addField(
      `**🏷 İsim Değiştirildi 🏷**`,
      `\n \n**🔸️İsmi Değiştirilen Kullanıcı:** ${user.tag} \n🔸️ **Yeni Kullanıcı Adı:** \`${code}\``
    )
    .setFooter(`Liber Code | Nick Sistemi`)
    .setThumbnail(client.user.avatarURL);
  message.channel.send(embed);
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["nick", "isim"],
  permLevel: 0
};
exports.help = {
  name: "nick1",
  description: "Birinin nickini değiştirir.",
  usage: "nick <Ł yeni nick>"
};
