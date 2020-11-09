const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Rainbow Eklenti Menüsü`, client.user.avatarURL)
.setColor('RANDOM')
.setDescription(`:rocket:  Rainbow botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Özel Oda Sistemi__`,`:rocket:  \`${prefix}özeloda\` Özel Oda Sistemi`,true)
.addField(`__Sunucu Panel__`,`:rocket:  \`${prefix}panel-kur\` Sunucunuzun İstatistiklerini Görürsünüz`,true)
.addField(`__İnvite Sistemi__`,`:rocket:  \`${prefix}invite\` Gelişmiş Davet Sistemi`,true)
.addField(`__Bilgilendirme__`,`:rocket:  \`${prefix}davet\` | Rainbow'u Sunucunuza Davet Edersiniz\n:rocket:  \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["eklenti"], 
    permLevel: 0
  };
  exports.help = {
    name: 'eklenti'
  }; 
  