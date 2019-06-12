const Discord = require('discord.js');
const bot = new Discord.Client()
const express = require('express');
const app = express();
const http = require('http');
const scarew = new Discord.ShardingManager('./bot.js', {// Ana dosyanızın adını yazınız.
    totalShards: 'auto',
    token: "NTY2OTg5MjEwMjQ2OTcxNDAz.XLNA9Q.dASS0BWsDmCR3_lyoBbo7aIbfrQ"// Buraya tokeninizi yazınız.
});

scarew.spawn(); 

scarew.on('launch', shard => {
  console.log(`**${shard.id}** ID shard started.`)
});

setTimeout(() => {
    scarew.broadcastEval("process.exit()");
}, 21600000);