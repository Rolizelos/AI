const Discord = require('discord.js');
module.exports.run = async (client, msg, args) => {
                        if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.sendEmbed(new Discord.RichEmbed()
         .setDescription(`**:fire: Yeterli yetki, bulunmamakta!**`)
         .setColor(`RED`)); 

    let kayıt = msg.guild.member(msg.mentions.users.first()) || msg.guild.member(args[0]);
    if (!kayıt) return msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: ("Kullanıcıyı etiketle!")
        }
    })

    let role = msg.guild.roles.find(r => r.name === "🌺 | diosa del palace");

    if (!role) {
        try {

            role = await msg.guild.Role({
            });

            msg.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: true,

                  });
            });
        } catch (e) {
            console.log(e.stack);
        }

    }

    if (kayıt.roles.has(role.id)) return msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: ("**Önceden verilmiş**")
        }
    });

    await kayıt.addRole(role);
      await msg.react('🌺');

    msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: ("**Rol verildi!**")
          
        }
    })
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'lady',
    description: 's',
    usage: 's'
};