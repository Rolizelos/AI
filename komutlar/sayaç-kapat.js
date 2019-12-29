const Discord = require('discord.js')
const fs = require('fs')

exports.run = async (client, message, args) => {
    let sayac = JSON.parse(fs.readFileSync("./sayac.json", "utf8"));
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın!`);
        if(!sayac[message.guild.id]) {
            const embed = new Discord.RichEmbed()
                .setDescription(`:warning: Sayaç, ayarlanmadığından dolayı sıfırlanamaz! sayaç <sayı> #kanal`)
        .setFooter('owner, iyi eğlenceler diler!', client.user.avatarURL)
                .setColor("RANDOM")
                .setTimestamp()
            message.channel.send({embed})
            return
        }
        delete sayac[message.guild.id]
        fs.writeFile("./sayac.json", JSON.stringify(sayac), (err) => {
            console.log(err)
        })
        const embed = new Discord.RichEmbed()
            .setDescription(`:warning: Sayaç, başarılı bir şekilde sıfırlandı!`)
      .setFooter('Owner Bot', client.user.avatarURL)
            .setColor("RANDOM")
            .setTimestamp()
        message.channel.send({embed})
        return
    }

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['sayaçsıfırla'],
  permLevel: 0
};

exports.help = {
  name: 'sayaç-kapat', 
  description: 'Sayaçı, sıfırlar!',
  usage: 'sayaç-sıfırla'
};
   