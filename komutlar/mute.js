const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require("../ayarlar.json")
const client = new Discord.Client();
//CodeFENIX
exports.run = async (bot, message, args) => {
 
   /////////////////////Config

 var logkanali = "true"; //log kanalı kullanılacak ise true yapın kullanılmayacaksa false yapın
var logkanalid = "663124687450275860"   //Log Kanalı Id
  var guildid = "658191439527936001" // Kullanılacak Sunucu
///////////////// Ana Kod

    
  let susturulan = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  const cfxhata = new Discord.RichEmbed()
  .setDescription(`**Hatalı Kullanım! \n\n **\`${ayarlar.prefix}mute <@susturalacak-kisi> <süre(1s,1m,1d,1h)>\``)
  .setColor("#d90000")
  .setFooter(`Okeanos | Mute Sistemi`)
  if(!susturulan) return message.channel.sendEmbed(cfxhata);
  const cfxyetki = new Discord.RichEmbed()
  .setDescription(`**Bunu Yapamam!**`)
  .setColor("#d90000")
  .setFooter(`Okeanos | Mute Sistemi`)
  if(susturulan.hasPermission("MANAGE_MESSAGES")) return message.channel.sendEmbed(cfxyetki);
let susturulanrol = message.guild.roles.find(susturulanrol => susturulanrol.name === "Muted");
//CodeFENIX
  if(!susturulanrol){
   //CodeFENIX 
    try{
      susturulanrol = await message.guild.createRole({
        name: "Muted",
        color: "#818386",
        permissions:[]
      })
//CodeFENIX      
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(susturulanrol, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }
    catch(e){
      console.log(e.stack);
    }
  }
//CodeFENIX  
//CodeFENIX
  let susturmazamani = args[1];

  
  const cfxsure = new Discord.RichEmbed()
  .setDescription(`**Süresini Belirtmelisiniz.**`)
  .setColor("#d90000")
  .setFooter(`Okeanos | Mute Sistemi`)
  if(!susturmazamani) return  message.channel.sendEmbed(cfxsure)
//CodeFENIX  
  await(susturulan.addRole(susturulanrol.id));
  const cfxsusturulan = new Discord.RichEmbed()
  
  .setDescription(`<@${susturulan.id}> \`${ms(ms(susturmazamani))}\` **süre boyunca susturma cezası aldı! **`)
  .setColor("#0088ff")
  .setFooter(`Susturan Yetkili --> ${message.author.username}`)
  client.channels.get(logkanalid).send(`✅  | ${user.tag} **Adlı Kullanıcı Sunucudan Banlandı!** \n  **Reason=>** \`\ ${reason} \`\ `)}
message.channel.sendEmbed(cfxsusturulan)
  
//CodeFENIX
  setTimeout(function(){
    susturulan.removeRole(susturulanrol.id);
  const susturmasonu = new Discord.RichEmbed()
  .setDescription(`<@${susturulan.id}> **Adlı Kişinin Susturma Cezası Sona Erdi! Artık Konuşabilir!**`)
  .setColor("#00ff88")
  .setFooter(`Susturan Yetkili --> ${message.author.username}`)
  message.channel.sendEmbed(susturmasonu)
  }, ms(susturmazamani));
  
}};
//CodeFENIX
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sustur'],
  permLevel: 2
};
//CodeFENIX
exports.help = {
  name: 'mute',
  description: 'Boss Config, susturma sistemi.',
  usage: 'mute <@susturulacakkisi> <süre>'
};