const ayarlar = require("../ayarlar.json");
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (message.author.id !== ayarlar.sahip) return;
  const cfxavatar = args.join(` `);
  client.user.setName(cfxavatar);
  return message.channel.send(
    "Botun Profil Resmi Başarıyla Belirtilen Olarak Ayarlandı."
  );
};
exports.conf = { enabled: true, guildOnly: false, aliases: [], permLevel: 4 };
exports.help = { name: "bot-avatar1" };
