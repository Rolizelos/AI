const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let invites = await message.guild.fetchInvites().catch(error => {
    return message.channel.send(
      "❌ | Davetleri Göremiyorum! Yeterli Yetkim Yok!"
    );
  });

  invites = invites.array();

  let possibleinvites = [];
  invites.forEach(function(invites) {
    possibleinvites.push(
      `🔸 | ${invites.inviter.username} | Davet: ${invites.uses}`
    );
  });

  const embed = new Discord.RichEmbed()
    .setTitle(`**📧 SUNUCU DAVET BİLGİLERİ 🔐**`)
    .setColor("RANDOM")
    .addField("↪ Invites Info ↩", `**${possibleinvites.join("\n")}**`)
    .setTimestamp()
    .setFooter(`Komutu Kullanan: ${message.author.username}`);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet-sırası", "ds"],
  permLevel: 0,
  kategori: "sunucu"
};
//Dcs Ekibi
exports.help = {
  name: "davet-sıralaması",
  description: "Sunucunuza en çok kullanıcı getirenleri sıralar.",
  usage: "davet-sıralaması"
};