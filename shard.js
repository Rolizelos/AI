const Discord = require('discord.js');
const bot = new Discord.Client()
const express = require('express');
const app = express();
const http = require('http');
const scarew = new Discord.ShardingManager('./bot.js', {
    totalShards: 'auto',
    token: "NjU1NDk0NTc3MTAwMjkyMTI0.XgyObA.TJWmrb--ir5QVdckNTNnHZB28xE"// Tokeninizi Buraya Girin..
});

scarew.spawn(); 

scarew.on('launch', shard => {
  console.log(`**${shard.id}** ID shard started.`)
});

setTimeout(() => {
    scarew.broadcastEval("process.exit()");
}, 21600000);