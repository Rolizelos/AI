exports.run = async(client, message, args) => {
  let user = message.mentions.users.first() || message.author;
   let deneme = args.slice(0).join(' ');
  if(!deneme) return message.channel.send("⚠ Birisini Etiketlemelisin!")
 let invites = await message.guild.fetchInvites() 
  let regular = invites.array().find(invite => invite.inviter.id === user.id) ? invites.find(invite => invite.inviter.id === user.id).uses : 0
 
  message.channel.send(`🔥 Toplam \`${regular}\` Davetin Var!`)
}
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'davet',
  description: 'CODEFENIX KOD PAYLASIM',
  usage: 'istek <istediğiniz>'
};