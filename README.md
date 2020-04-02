var stl = "693532845175734332";

client.on("raw", async event => {
  var starchan = client.channels.get(stl);
  if (event.t === "MESSAGE_REACTION_ADD") {
    if (event.d.emoji.name !== "⭐") return;
    var chan = client.channels.get(event.d.channel_id);
    var msg = await chan.fetchMessage(event.d.message_id);
    var rs = msg.reactions.get("⭐").users.size;
    if(msg.author.bot) return;
   if(!msg.guild) return;
    if (rs >= 1) {
      var embed = new Discord.RichEmbed();
      embed.setAuthor(msg.author.tag, msg.author.avatarURL)
      embed.setTitle(`Yıldızlanan Mesaj!`)
      embed.setURL(`https://discordapp.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`)
      embed.addField("Kanal: ", chan, true);
      embed.addField("Mesaj sahibi: ", msg.author.tag, true);
      embed.setColor("GOLD");
      embed.setThumbnail(msg.author.avatarURL)
      embed.setTimestamp()
      embed.addField(
        "**Mesaja git:** ",
        `[Zıpla](https://discordapp.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id})`,
        true
      );

      if (msg.content) {
        embed.addField("Mesaj:", msg.content, true);
      }
      if (msg.attachments.size > 0) {
        embed.setImage(msg.attachments.first().url);
      }

      embed.setFooter(`⭐ ${rs} | ${msg.author.id}`);

      if (db.has(`star.${msg.id}`) === true) {
        var msj = await starchan.fetchMessage(db.get(`star.${msg.id}`));
        msj.edit(embed);
      } else {
        starchan.send(embed).then(mesaj => {
          db.set(`star.${msg.id}`, mesaj.id);
        });
      }
    }
  } else if (event.t === "MESSAGE_REACTION_REMOVE") {
    if (event.d.emoji.name !== "⭐") return;
    var chan = client.channels.get(event.d.channel_id);
    var msg = await chan.fetchMessage(event.d.message_id);
    if (!db.fetch(`star.${msg.id}`)) return;
    var lmsg = await starchan.fetchMessage(db.get(`star.${msg.id}`));
    var rs = msg.reactions.get("⭐") ? msg.reactions.get("⭐").users.size : 0;

    if (rs >= 1) {
      var embed = new Discord.RichEmbed();
      embed.setAuthor(msg.author.tag, msg.author.avatarURL)
      embed.setTitle(`Yıldızlanan Mesaj!`)
      embed.setURL(`https://discordapp.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`)
      embed.addField("Kanal: ", chan, true);
      embed.addField("Mesaj sahibi: ", msg.author.tag, true);
      embed.setColor("GOLD");
      embed.setThumbnail(msg.author.avatarURL)
      embed.setTimestamp()
      embed.addField(
        "**Mesaja git:** ",
        `[Zıpla](https://discordapp.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id})`,
        true
      );
      if (msg.content) {
        embed.addField("Mesaj:", msg.content, true);
      }
      if (msg.attachments.size > 0) {
        embed.setImage(msg.attachments.first().url);
      }

      embed.setFooter(`⭐ ${rs} | ${msg.author.id}`);

      if (db.fetch(`star.${msg.id}`) === true) {
        lmsg.edit(embed);
      }
    } else {
      db.delete(`star.${msg.id}`);
      lmsg.delete();
    }
  }
});