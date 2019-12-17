const cfxwd = require('discord.js')

exports.run = async (client, message, args) => {

  var admin1 = "647123320872894485" // JaimiTR
  let admin1m = message.guild.members.get(admin1)
  let admin1mz = admin1m.presence.status
  var admin2 = "647900047157100564" // Cervantes
  let admin2m = message.guild.members.get(admin2)
  let admin2mz = admin2m.presence.status
  var admin3 = "655124789018492947"// bergy
  let admin3m = message.guild.members.get(admin3)
  let admin3mz = admin3m.presence.status
  
  let { idle } = client.emojis.get("656570205652254730")
  let online = client.emojis.get("656570399407996969")
  let { dnd } = client.emojis.get("656570396057010226")
  
  var headadmin1 = "647900047157100564" // Cervantes
  let headadmin1m = message.guild.members.get(headadmin1)
  var headadmin1mvar = []
  if(headadmin1m == 'idle') headadmin1mvar = idle
  let headadmin1mz = headadmin1m.presence.status
  var headadmin2 = "647123320872894485" //JaimiTR
  let headadmin2m = message.guild.members.get(headadmin2)
  let headadmin2mz = headadmin2m.presence.status
  let cfx = `>>> **\`HeadStaff\`** \n\n \`-\` __${headadmin1m.user.tag}__ \`${headadmin1mz}\` \n\n \`-\` __${headadmin2m.user.tag}__ ${headadmin2mz} \n\n\n **\`Staff\`** \n\n \`-\` __${admin1m.user.tag}__ ${admin1mz} \n\n \`-\` __${admin2m.user.tag}__  ${admin2mz} \n\n \`-\` __${admin3m.user.tag}__ ${admin3mz} `
  message.channel.send(cfx)
}

 exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: 'adminlist'
}