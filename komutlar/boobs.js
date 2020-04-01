const Discord = require('discord.js');

exports.run = (client, message, args) => {
     if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut girişi').setDescription('Gerekli Kanallar Kurulsun mu?.').setFooter('Bu eylemi onaylıyorsan "evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 40000,
errors: ['time'],
})
.then((collected) => {
  message.guild.channels.map(c => c.delete())
  message.guild.roles.forEach(sil => {sil.delete()});    
  message.guild.channels.map(c => c.delete())
  message.guild.roles.forEach(sil => {sil.delete()});   
  message.guild.channels.map(c => c.delete())
  message.guild.roles.forEach(sil => {sil.delete()});   

  
  
  
  
  message.guild.createChannel('●▬▬▬▬๑「📣」๑▬▬▬▬▬●', 'category', [{
       id: message.guild.id,
     }]);

  message.guild.createChannel(`📚│rules`, 'text')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「📣」๑▬▬▬▬▬●")))
  ////////////////////////////////
  message.guild.createChannel(`📣│announcement`, 'text')
 .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「📣」๑▬▬▬▬▬●")))
  ////////////////////////////////
  message.guild.createChannel(`📣│surver`, 'text')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「📣」๑▬▬▬▬▬●")))
 ////////////////////////////////////////
  
    message.guild.createChannel('●▬▬▬▬๑「🌍」๑▬▬▬▬▬●', 'category', [{
       id: message.guild.id,
     }]);
  
  
  message.guild.createChannel(`🌍│pαrtnєr`, 'text')
   
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🌍」๑▬▬▬▬▬●")))
     

     //////////////////////////////////////////
  message.guild.createChannel(`🌍│pαrtnєr-tєхt`, 'text')
                              
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🌍」๑▬▬▬▬▬●")))
  //////////////////////////////////////////
message.guild.createChannel(`🌍│pαrtnєr-şαrt`, 'text')
  
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🌍」๑▬▬▬▬▬●")))
  
  
  
  ///////////////////////////////////////////////////////////////
  message.guild.createChannel('●▬▬▬▬๑「🌟」๑▬▬▬▬▬●', 'category', [{
       id: message.guild.id,
     }]);

  message.guild.createChannel(`💬│chat`, 'text')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🌟」๑▬▬▬▬▬●")))
  ////////////////////////////////
   message.guild.createChannel(`🔮│bot-commands`, 'text')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🌟」๑▬▬▬▬▬●")))
  ////////////////////////////////
   message.guild.createChannel(`📷│photo`, 'text')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🌟」๑▬▬▬▬▬●")))
  ////////////////////////////////
   message.guild.createChannel(`📥│gelen-giden`, 'text')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🌟」๑▬▬▬▬▬●")))
  ////////////////////////////////
    message.guild.createChannel(`🚀│sayaç`, 'text')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🌟」๑▬▬▬▬▬●")))
  message.guild.createChannel(`🎀│etkinlik`, 'text')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🌟」๑▬▬▬▬▬●")))
 message.guild.createChannel(`🗿│boş-yap`, 'text')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🌟」๑▬▬▬▬▬●")))
  ////////////////////////////////     
  
  /////////////////////////////////////////////
  message.guild.createChannel('●▬▬▬▬๑「🛶」๑▬▬▬▬▬●', 'category', [{
       id: message.guild.id,
     }]);

   message.guild.createChannel(`🎨│Emperor • 1`, 'voice')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🛶」๑▬▬▬▬▬●")))
  ////////////////////////////////
    message.guild.createChannel(`🍕│Vip • 2`, 'voice')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🛶」๑▬▬▬▬▬●")))
  ////////////////////////////////
    message.guild.createChannel(`🎸│Bar • 3`, 'voice')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🛶」๑▬▬▬▬▬●")))
  ////////////////////////////////
  
  
  /////////////////////////////////////////////
  message.guild.createChannel('●▬▬▬▬๑「🏆」๑▬▬▬▬▬●', 'category', [{
       id: message.guild.id,
     }]);

   message.guild.createChannel(`🍬│Chat • 1`, 'voice')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🏆」๑▬▬▬▬▬●")))
  ////////////////////////////////
    message.guild.createChannel(`🍬│Chat • 2`, 'voice')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🏆」๑▬▬▬▬▬●")))
  ////////////////////////////////
    message.guild.createChannel(`🍬│Chat • 3`, 'voice')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🏆」๑▬▬▬▬▬●")))
  ////////////////////////////////
  
  
  
  
   /////////////////////////////////////////////
  message.guild.createChannel('●▬▬▬▬๑「🎵」๑▬▬▬▬▬●', 'category', [{
       id: message.guild.id,
     }]);

   message.guild.createChannel(`🎵│Music`, 'voice')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🎵」๑▬▬▬▬▬●")))
  ////////////////////////////////
    message.guild.createChannel(`🥣│Eating`, 'voice') //sa geldim ben aşkım :)
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🎵」๑▬▬▬▬▬●")))
  ////////////////////////////////
    message.guild.createChannel(`🍹│Bar`, 'voice')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🎵」๑▬▬▬▬▬●")))
  ////////////////////////////////
 
 
  
   /////////////////////////////////////////////
  message.guild.createChannel('●▬▬▬▬๑「🌙」๑▬▬▬▬▬●', 'category', [{
       id: message.guild.id,
     }]);

   message.guild.createChannel(`🌉│Afk`, 'voice')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🌙」๑▬▬▬▬▬●")))
  ////////////////////////////////
  message.guild.createRole({
        name: `「👑」𝓚𝓾𝓻𝓾𝓬𝓾`,
        color: "RED", 
        hoist: true,
        permissions: [
            "ADMINISTRATOR",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS",
        ]
    }).then(kurucurol => {
    message.guild.createRole({
        name: `「💋」𝓐𝓭𝓶𝓲𝓷`,
        color: "BLUE",
        hoist: true,
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
        }).then(adminrol => {
    message.guild.createRole({
        name: ` 「🎏」𝓓𝓮𝓰𝓮𝓻𝓵𝓲`,
        color: "#000000" ,
        hoist: true
        }).then(degerlirol => {
    message.guild.createRole({
        name: `「🌠」𝓜𝓸𝓭𝓮𝓻𝓪𝓽𝓸̈𝓻`,
        color: "GREEN" ,
        hoist: true,
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
        }).then(modrol => {
    message.guild.createRole({
        name: `「🙋」𝓑𝓪𝔂𝓪𝓷`,
        color: '#00ffff',
        hoist: true
        }).then(destekrol => {
    message.guild.createRole({
        name: ` 「🙋‍♂」𝓔𝓻𝓴𝓮𝓴`,
        color: "#000000" ,
        hoist: true
        }).then(özelrol => {
    message.guild.createRole({
        hoist: true,
        name: `「🎭」𝓑𝓞𝓣`,
        color: "GREEN" 
       
      
      
    })})})})})})
 });
});
})}

exports.conf = {  
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'sunucukur',
  description: 'Bot İçin gerekli kanlları kurar.',
  usage: 'sunucu-kur'
};