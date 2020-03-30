const Discord = require('discord.js');
const a = require('../ayarlar.json');
const db = require('quick.db');
const Pornsearch = require('pornsearch').default;

exports.run = async (client, message, args) => {
 

        var s = message.content.split(/\s+/g).slice(1).join(" ");

        if (!s) {
            return message.channel.send('Please provide me something to search for!')
        }

        var Searcher = new Pornsearch(s);

        try {
            Searcher.videos()
                .then(videos => message.channel.send(videos[1].url));

            return null;

        } catch (err) {
            return message.channel.send(`No results found for **${s}**`)
        }}
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'p',
};