const Discord = require("discord.js");
let ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = function(client, msg, author) {
  let yazi = msg.mentions.members.first();
  if (!yazi) {
    msg.channel.sendMessage(
      "**Örnek Kullanım:** `" +
        prefix +
        "öp <@kullanıcı>`"
    );
  }
  if (yazi) {
    const Embed = new Discord.RichEmbed()
      .setTitle("")
      .setDescription(
        `Ohh ❤ ** <@${msg.author.id}> Adlı Kullanıcı ${yazi} Adlı Kullanıcıya Sakso Çekti!**`
      )
      .setColor("RANDOM")
      .setImage(
        "https://https://discordapp.com/channels/@me/658562362160185375/664488700956246070"
      );
    msg.channel.sendMessage(Embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "sakso",
  description: "Bu komutla istediğine Sakso Çektirirsin!",
  usage: "sakso <@kullanıcı>"
};