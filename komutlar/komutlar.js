const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    try {
        await message.channel.send(`**Toplam Komut Sayısı:**` + `\`${client.commands.size}\`` + `\n**-----------------------------------------------------------------------------**` + `\n**Komutlar:** \n${client.commands.map(props => `\`${props.help.name}\``).join(" ϟ ")}`);
    } catch (e) {
        throw e;
    }
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["commands"],
  permLevel: 0
};

module.exports.help = {
  name: 'komutlar1',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};