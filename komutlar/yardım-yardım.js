const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Rainbow Yardım Menüsü`, client.user.avatarURL)
.setColor('RANDOM')
.setDescription(`:rocket:  Rainbow botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`:rocket:  \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`:rocket:  \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`:rocket:  \`${prefix}guard\`  `,true)
.addField(`__Sunucu Komutları__`,`:rocket:  \`${prefix}sunucu\` `,true)
.addField(`__Eklenti Komutları__`,`:rocket:  \`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`:rocket:  \`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,`:rocket:  \`${prefix}davet\` | Rainbow'U Sunucunuza Davet Edersiniz\n:rocket:  \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["yardım","help"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardım'
  }; 
  