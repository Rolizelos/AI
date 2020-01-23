const Discord = require("discord.js");

exports.run = (client, message, args) => {
  

  //KOD BÖLÜMÜ
  

    if(message.guild.channels.find('name', 'Talepler')) {
      message.guild.createChannel(`destek-${message.author.id}`, "text").then(c => {
      const category = message.guild.channels.find('name', 'Talepler')
      c.setParent(category.id)
      let role = message.guild.roles.find("name", "Destek Ekibi");
      let role2 = message.guild.roles.find("name", "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(message.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });

      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`${client.user.username} | Destek Sistemi`)
      .addField(`Merhaba ${msg.author.username}!`, `Destek Yetkilileri burada seninle ilgilenecektir. \nDestek talebini kapatmak için \`${prefix}kapat\` yazabilirsin.`)
      .addField(`» Talep Konusu/Sebebi:`, `${message.content}`, true)
      .addField(`» Kullanıcı:`, `<@${msg.author.id}>`, true)
      .setFooter(`${client.user.username} | Destek Sistemi`)
      .setTimestamp()
      c.send({ embed: embed });
      c.send(`<@${message.author.id}> Adlı kullanıcı "\`${msg.content}\`" sebebi ile destek talebi açtı! Lütfen Destek Ekibini bekle, @here`)
      message.delete()
      }).catch(console.error);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yaz"],
  kategori: "Sistem",
  permLevel: 0
};

exports.help = {
  name: "kodekle",
  description: "Bota yazıldığı kanala mesaj attırır.",
  usage: "yazdır"
};