const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (message.channel.type == "dm") {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("❌ **Bot Komutlarını Özel Mesajlarda Kullanamazsın!**");
    return message.author.sendEmbed(ozelmesajuyari);
  }

  let verifyroless = !message.member.hasPermission("MANAGE_MESSAGES");
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.channel.send(
      `Bu Komutu Kullana Bilmek İçin **Mesajları Yönet** Yetkisine Sahip Olman Gerek!`
    );
  }

  let mesaj = args.slice(0).join(" ");
  if (mesaj.length < 1)
    return message.reply("❌ Lütfen Bir Mesaj Belirt!");
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yaz"],
  kategori: "Sistem",
  permLevel: 0
};

exports.help = {
  name: "yazdır",
  description: "Bota yazıldığı kanala mesaj attırır.",
  usage: "yazdır"
};