const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
        let prefix = ayarlar.prefix

  
        if(args[0] == 'js') {
            let kanal = '📁'+args[1]
            let code = args.slice(2).join(' ');
            if (!kanal) return message.channel.send("Kanal İsmi Yazmalısın!");
            if (!code) return message.channel.send("Kodunu Yazmalısın!");
            message.delete();
            if (message.guild.channels.find(a => a.id === "693559264652034209")) {
            message.guild.createChannel(kanal, {type: "text", parent: message.guild.channels.find(a => a.id === "693559264652034209")}).then(c => c.send(

            `**${message.guild.name} SUNUCUSU KOD PAYLAŞIM KANALI! JavaScript KATEGORİSİ!**\n
            **${message.author} Tarafından \`\`${kanal}\`\` İsimli Kod Eklendi! ${message.author} Teşekkür Ederiz! :heart:\n\n
            ${client.emojis.get("693533313180368945")} İşte Kod;**

            ${code}`))
            message.reply(`${client.emojis.get("693533190580731905")} **Kodunuz Başarıyla JavaScript Kategorisine Eklendi!\n Eklenen Kanalın İsmi:** \`\`${kanal}\`\` `).then(n => n.delete(5000));
            } else {
            return message.reply("<#693559264652034209> adında bir kategori yok!")
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
            if (message.guild.channels.find(a => a.id === "693564774885228595")) {
            message.guild.createChannel(kanal, {type: "text", parent: message.guild.channels.find(a => a.id === "693564774885228595")}).then(c => c.send(


            `**${message.guild.name} SUNUCUSU KOD PAYLAŞIM KANALI! JavaScript++ KATEGORİSİ!**\n
            **${message.author} Tarafından \`\`${kanal}\`\` İsimli Kod Eklendi! ${message.author} Teşekkür Ederiz! :heart:\n\n
            ${client.emojis.get("693533313180368945")} İşte Kod;**

            ${code}`))
            message.reply(`${client.emojis.get("693533190580731905")} **Kodunuz Başarıyla JavaScript++ Kategorisine Eklendi!\n Eklenen Kanalın İsmi:** \`\`${kanal}\`\` `).then(n => n.delete(5000));
            } else {
            return message.reply("<#693564774885228595> adında bir kategori yok!")
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
            if (message.guild.channels.find(a => a.id === "693564894041210913")) {
            message.guild.createChannel(kanal, {type: "text", parent: message.guild.channels.find(a => a.id === "693564894041210913")}).then(c => c.send(

            `**${message.guild.name} SUNUCUSU KOD PAYLAŞIM KANALI! Altayapı KATEGORİSİ!**\n
            **${message.author} Tarafından \`\`${kanal}\`\` İsimli Altyapı Eklendi! ${message.author} Teşekkür Ederiz! :heart:\n\n
            ${client.emojis.get("693533313180368945")} İşte Altaypı;**

            ${code}`))
            message.reply(`${client.emojis.get("693533190580731905")} **Kodunuz Başarıyla Altyapı Kategorisine Eklendi!\n Eklenen Kanalın İsmi:** \`\`${kanal}\`\` `).then(n => n.delete(5000));
            } else {
            return message.reply("<#693564894041210913> adında bir kategori yok!")
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