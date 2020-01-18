const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_NICKNAMES"))
    return message.channel.send(
      `❌ Bu Komutu Kullanabilmek için \`İsimleri Yönet\` Yetkisine Sahip Olmalısın!`
    );
  let member = message.mentions.members.first();
  let isim = args[1]
  let yaş = args[2]
  if (!member) return message.channel.send("❌ Bir Üye Etiketlemelisin!");
  if (!isim) return message.channel.send("❌ Bir İsim Yazmalısın!");
  if (!yaş) return message.channel.send("❌ Bir Yaş Yazmalısın!");
  member.setNickname(`${isim} | ${yaş}`);
  const embed = new Discord.RichEmbed()
    .addField(
      `**🏷 İsim Değiştirildi 🏷**`,
      `\n \n**🔸️İsmi Değiştirilen Kullanıcı:** ${member.user} \n🔸️ **Yeni Kullanıcı Adı:** \`${isim} | ${yaş}\``
    )
    .setFooter(`Bot İsmi | Nick Sistemi`)
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
  name: "nick",
  description: "Birinin nickini değiştirir.",
  usage: "nick"
};
