const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'anal'}) 
    .end((err, response) => {
       const cfx = new Discord.RichEmbed()
      .setImage(response.body.message)
      .setDescription(`[Anal!](https://discordapp.com/oauth2/authorize?client_id=655493168099229709&scope=bot&permissions=805314622)`)
      .setFooter(`Okeanos | Nsfw Sistem`)
      msg.channel.send(cfx)
    });
  } else {
    msg.channel.send("**+18 Fotoğraf Paylaşabilmem İçin Nsfw Ayarını Açın!**")
  }
};
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
 };

 exports.help = {
   name: 'anal',
   description: '+18 Resim Gösterir',
   usage: 'nsfw-anal'
 };