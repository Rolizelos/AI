const Discord = require("discord.js");
let ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = function(client, msg, author) {
  let yazi = msg.mentions.members.first();
  if (msg.channel.nsfw === true) 
  if (!yazi) {
    msg.channel.sendMessage(
      "**Örnek Kullanım:** `" +
        prefix +
        "sakso <@kullanıcı>`"
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
        "https://cdn.discordapp.com/attachments/657271597320896522/664499852172066877/liseli-kiza-sakso-cektirip-sikme_1.gif"
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