
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Rainbow Yardım Menüsü`, client.user.avatarURL)
.setColor('RANDOM')
.setDescription(`:rocket:  Rainbow botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Uyar__`,`:rocket: \`${prefix}genel\``,true)
.addField(`__Uyarı Sil__`,`<a:setting:750076062716788807> \`${prefix}uyar\` Belirtilen Kişiyi Uyarır`,true)
.addField(`__Guard Komutları__`,`:rocket:  \`${prefix}uyarı-sil\` Belirtilen Kişinin Uyarılarını Siler `,true)
.addField(`__Sunucu Komutları__`,`:rocket: \`${prefix}uyarılar\` Belirtilen Kişinin Uyarılarını Gösterir`,true)
.addField(`__Bilgilendirme__`,`:rocket:  \`${prefix}davet\` | Rainbow'u Sunucunuza Davet Edersiniz\n:rocket:  \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["yardımuyar","helpuyar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardımuyarı'
  }; 
  