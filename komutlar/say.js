const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const bergy = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`**Sunucuda ${message.guild.memberCount} Kişi Bulunmaktadır!**`)
    .setAuthor("Toplam Üye", `${message.author.displayAvatarURL}`)
    .setFooter('say')

  message.channel.sendEmbed(bergy);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["total", "toplamüye", "toplamkişi", "totalmember"],
  permLevel: 0
};

exports.help = {
  name: "say",
  description: "Sunucudaki ve Ses Kanallarındaki Kişi Sayısını Gösterir! ",
  usage: "say"
};