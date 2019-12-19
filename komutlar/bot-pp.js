const Discord = require(`discord.js`);

exports.run = async (client, message, args) => {

const bergy = new Discord.RichEmbed()
.setColor(`RANDOM`)
.setDescription(`Botun PP'si !`)
.setImage(client.user.avatarURL)

return message.channel.send(bergy).then(n => n.delete(40000));
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['y2'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'bot-pp',
    description: 'Bot Avatar!',
    usage: 'bot-pp'
  };

//By Bergy | LiberCode/Botlist