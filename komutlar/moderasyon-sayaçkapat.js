const Discord = require('discord.js'),
      db = require('quick.db'),
      ayarlar = require('../ayarlar.json'),
      prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
  
let frenzysayı = await db.fetch(`TitanCode+SayaçSayı_${message.guild.id}`)  
let frenzykanal = await db.fetch(`TitanCode+SayaçKanal_${message.guild.id}`)  
 
if(!frenzysayı && !frenzykanal) return message.reply(`Sayaç Sistemi Zaten Ayarlı Değil! **Ayarlamak İçin** : \`${prefix}sayaç #kanal 100\``)
db.delete(`TitanCode+SayaçSayı_${message.guild.id}`) 
db.delete(`TitanCode+SayaçKanal_${message.guild.id}`) 
message.reply(`Sayaç Başarıyla Kapatıldı!!`)
};
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: 'sayaç-kapat',
  description: 'Sayaç Sistemi - Titan Code',
  usage: 'sayaç-kapat'
};