const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Rainbow Koruma Menüsü`, client.user.avatarURL)
.setColor('RANDOM')
.setDescription(`:rocket:  Rainbow botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Rol Koruma__`,`:rocket:  \`${prefix}rol-koruma\` Sunucunuzda Rol Silinirse Rölü Tekrar Açar`,true)
.addField(`__Bot Koruma__`,`:rocket:  \`${prefix}bot-koruma\` Sunucunuza Sizden Başka Birisi Bot Ekleyemez`,true)
.addField(`__Bilgilendirme__`,`:rocket:  \`${prefix}davet\` | Rainbow'u Sunucunuza Davet Edersiniz\n:rocket:  \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["guard","koruma"], 
    permLevel: 0
  };
  exports.help = {
    name: 'koruma'
  }; 
  