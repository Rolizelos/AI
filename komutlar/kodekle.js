const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require("quick.db")
exports.run = (client, message, args) => {
        let prefix = ayarlar.prefix
if (!message.member.roles.find('id', 'ROL ID')) return message.channel.send('Bu Kodu Kullanabilmek İçin <@&ROL ID> Rolüne Sahip Olmalısın!');
  

        if(args[0] == 'js') {
            let kanal = '📁'+args[1]
            let code = args.slice(2).join(' ');
            if (!kanal) return message.channel.send("Kanal İsmi Yazmalısın!");
            if (!code) return message.channel.send("Kodunu Yazmalısın!");
            message.delete();
            if (message.guild.channels.find(a => a.id === "KATEGORİ ID")) {
            message.guild.createChannel(kanal, {type: "text", parent: message.guild.channels.find(a => a.id === "KATEGORİ ID")}).then(c => c.send(new Discord.RichEmbed()
.setColor("RED")
.setDescription(
            `**${message.guild.name} SUNUCUSU KOD PAYLAŞIM KANALI! JavaScript KATEGORİSİ!**\n
            **${message.author} Tarafından \`\`${kanal}\`\` İsimli Kod Eklendi! ${message.author} Teşekkür Ederiz! :heart:\n\n
            ${client.emojis.get("EMOJİ ID")} İşte Kod;**

            ${code}`)))
            message.reply(`${client.emojis.get("EMOJİ ID")} **Kodunuz Başarıyla JavaScript Kategorisine Eklendi!\n Eklenen Kanalın İsmi:** \`\`${kanal}\`\` `).then(n => n.delete(5000));
            } else {
            return message.reply("<#KATEGORİ ID> adında bir kategori yok!")
            }
          }
      //---------------------------------------------------------------------------------------------------------------------------  
      //---------------------------------------------------------------------------------------------------------------------------  
        else if(args[0] == 'js+') {
            let kanal = '📁'+args[1]
            let code = args.slice(2).join(' ');
            if (!kanal) return message.channel.send("Kanal İsmi Yazmalısın!");
            if (!code) return message.channel.send("Kodunu Yazmalısın!");
            message.delete();
            if (message.guild.channels.find(a => a.id === "KATEGORİ ID")) {
            message.guild.createChannel(kanal, {type: "text", parent: message.guild.channels.find(a => a.id === "KATEGORİ ID")}).then(c => c.send(new Discord.RichEmbed()
.setColor("RED")
.setDescription(


            `**${message.guild.name} SUNUCUSU KOD PAYLAŞIM KANALI! JavaScript++ KATEGORİSİ!**\n
            **${message.author} Tarafından \`\`${kanal}\`\` İsimli Kod Eklendi! ${message.author} Teşekkür Ederiz! :heart:\n\n
            ${client.emojis.get("EMOJİ ID")} İşte Kod;**

            ${code}`)))
            message.reply(`${client.emojis.get("EMOJİ ID")} **Kodunuz Başarıyla JavaScript++ Kategorisine Eklendi!\n Eklenen Kanalın İsmi:** \`\`${kanal}\`\` `).then(n => n.delete(5000));
            } else {
            return message.reply("<#KATEGORİ ID> adında bir kategori yok!")
            }
        }
      //---------------------------------------------------------------------------------------------------------------------------  
      //---------------------------------------------------------------------------------------------------------------------------  
        else if(args[0] == 'altyapı') {
            let kanal = '📁'+args[1]
            let code = args.slice(2).join(' ');
            if (!kanal) return message.channel.send("Kanal İsmi Yazmalısın!");
            if (!code) return message.channel.send("Kodunu Yazmalısın!");
            message.delete();
            if (message.guild.channels.find(a => a.id === "KATEGORİ ID")) {
            message.guild.createChannel(kanal, {type: "text", parent: message.guild.channels.find(a => a.id === "KATEGORİ ID")}).then(c => c.send(new Discord.RichEmbed()
.setColor("RED")
.setDescription(

            `**${message.guild.name} SUNUCUSU KOD PAYLAŞIM KANALI! Altayapı KATEGORİSİ!**\n
            **${message.author} Tarafından \`\`${kanal}\`\` İsimli Altyapı Eklendi! ${message.author} Teşekkür Ederiz! :heart:\n\n
            ${client.emojis.get("EMOJİ ID")} İşte Altayapı;**

            ${code}`)))
            message.reply(`${client.emojis.get("EMOJİ ID")} **Kodunuz Başarıyla Altyapı Kategorisine Eklendi!\n Eklenen Kanalın İsmi:** \`\`${kanal}\`\` `).then(n => n.delete(5000));
            } else {
            return message.reply("<#KATEGORİ ID> adında bir kategori yok!")
            }
        }
      }  
      

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kodekle'
};