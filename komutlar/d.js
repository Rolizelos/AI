const Discord = require(`discord.js`);

exports.run = async (client, message, args) => {
  
    let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

const bergy = new Discord.RichEmbed()
const member = message.guild.member(user)
.setColor(`RANDOM`)
.setDescription(`Senin Profil Fotoğrafın;`)
.setImage(user.avatarURL)

return message.channel.send(bergy).then(n => n.delete(40000));
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['botpp'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'pp',
    description: 'Bot Avatar!',
    usage: 'bot-pp'
  };

//By Bergy | LiberCode/Botlist