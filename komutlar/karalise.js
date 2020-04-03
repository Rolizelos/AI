const Discord = require('discord.js');
const db = require('quick.db');
const { prefix } = require('../ayarlar.json');
exports.run = async (client, message, args) => {
let cfxuser = message.mentions.members.first()
let cfxkaralisteid = args[1];
let cfxkaralistededb = await db.fetch(`cfxkaralistede${message.author.id}`)
let cfxkaralistekanaldb = await db.fetch(`cfxkaralistekanaldb${message.guild.id}`)
let cfxkanal2 = message.guild.channels.find('id', cfxkaralistekanaldb)
let cfxkanal = message.mentions.channels.first()
const karaliste = new Discord.RichEmbed()
.setColor(`RED`)
.setTitle(`${client.emojis.get("EMOJİ ID")} ${message.guild.name} KARALİSTE`)
.setDescription(`> **Karaliste Logunu Ayarlamak İçin:** \`${prefix}karaliste kanalayarla #kanal\` \n > **Karalisteye Birini Eklemek İçin:** \`${prefix}karaliste ekle ID\` \n > **Karalisteden Birini Silmek İçin:** \`${prefix}karaliste kaldır ID\` \n > **Karaliste Log Kanalını Kapatmak İçin:** \`${prefix}karaliste kanalsıfırla\` \n > **Sistemi Sıfırlamak İçin:** \`${prefix}karaliste sıfırla\` `);
if(!args[0]) return message.channel.send(karaliste)

if(args[0] == 'sıfırla') {
	db.delete(`cfxkaralistededb${cfxkaralisteid}`)
	db.delete(`cfxkaralistekanaldb${message.guild.id}`)
	message.channel.send(`Sistem Kapatıldı.`)
	return; }
if(args[0] == 'kanalsıfırla') {
	db.delete(`cfxkaralistekanaldb${message.guild.id}`)
	message.channel.send(`Kanal Sıfırlandı`)
	return; }
if(args[0] == 'kanalayarla') {
	db.set(`cfxkaralistekanaldb${message.guild.id}`, cfxkanal.id)
	message.channel.send(`Karaliste Logu ${cfxkanal} olarak ayarlandı.`)
	return; }
if(args[0] == 'ekle') {
	if(args[1] == cfxkaralisteid) db.set(`cfxkaralistededb${cfxkaralisteid}`, 'karalistede')
  if(args[1] == cfxuser) db.set(`cfxkaralistededb${cfxuser.id}`, 'karalistede')
  let cfxdb11 = [];
  if(args[1] == cfxuser) cfxdb11 = cfxuser
  if(args[1] == cfxkaralisteid) cfxdb11 = `<@${cfxkaralisteid}>`
const alındı = new Discord.RichEmbed()
.setColor(`RED`)
.setTitle(`${client.emojis.get("EMOJİ ID")} ${message.guild.name} KARALİSTE`)
.setDescription(`${cfxdb11} **Karalisteye Alındı!**`)
cfxkanal2.send(alındı)

	return }
if(args[0] == 'kaldır') {
	if(args[1] == cfxkaralisteid) db.delete(`cfxkaralistededb${cfxkaralisteid}`)
  if(args[1] == cfxuser) db.delete(`cfxkaralistededb${cfxuser.id}`)
  let cfxdb22 = [];
  if(args[1] == cfxuser) cfxdb22 = cfxuser
  if(args[1] == cfxkaralisteid) cfxdb22 = `<@${cfxkaralisteid}>`
const verildi = new Discord.RichEmbed()
.setColor(`RED`)
.setTitle(`${client.emojis.get("EMOJİ ID")} ${message.guild.name} KARALİSTE`)
.setDescription(`${cfxdb22} **Karalisteden Silindi!**`)
cfxkanal2.send(verildi)
	return }}
exports.conf = { enabled: true, guildOnly: false, aliases: [], permLevel: 4 };
exports.help = { name: 'karaliste' };