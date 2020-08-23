const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()//GweepCreative
      .setColor(0xff0000)//GweepCreative
      .setTimestamp()//GweepCreative
      .setAuthor(message.author.username, message.author.avatarURL)//GweepCreative
      .addField(
        "⚠ **Uyarı** ⚠",
        "`rol-ver` **Adlı Komutu Özel Mesajlarda Kullanamazsın!**"
      );
    return message.author.sendEmbed(ozelmesajuyari);
  }
  if (!message.member.hasPermission("MANAGE_ROLES"))//GweepCreative
    return message.reply(
      "❌ Bu Komutu Kullana Bilmek için `Rolleri Yönet` Yetkisine Sahip Olmalısın!"
    );
  let guild = message.guild;//GweepCreative
  let rol = message.mentions.roles.first();//GweepCreative
  let user = message.mentions.members.first();//GweepCreative

  if (!user)//GweepCreative
    return message
      .reply("**⚠ Rol Vermek İstediğin Kişiyi Yazmalısın!**")//GweepCreative
      .catch(console.error);//GweepCreative
  if (rol.length < 1) return message.reply("**⚠ Bir Rol Yazmalısın!**");//GweepCreative
//GweepCreative
  user.addRole(rol);//GweepCreative
  const embed = new Discord.RichEmbed()//GweepCreative
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription(
      `✅  Başarıyla ${user} İsimli Kullanıcıya ${rol} İsimli Rol Verildi!`
    )
    .setFooter(message.guild.name, message.guild.iconURL);
  message.channel.send(embed);
};
//GweepCreative
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rolver", "rv"],
  permLevel: 0
};
exports.help = {
  name: "rolver"
};
   