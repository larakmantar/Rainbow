const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Rainbow Moderasyon Komutları`, client.user.avatarURL)
.setColor('RANDOM')
.setDescription(`:rocket:  Rainbow botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Reklam Engel__`,`:rocket:  \`${prefix}reklam-engel\` Sunucunzuda Reklamları Engeller`,true)
.addField(`__Reklam Kick__`,`:rocket:  \`${prefix}reklam-kick\` Sunucunuzda Reklam Yapanları 3 Uyarıda Kickler`,true)
.addField(`__Ban__`,`:rocket:  \`${prefix}ban\`  Sunucunuzda Belirtiğiniz Kişiyi Banlar`,true)
.addField(`__Kick__`,`:rocket:  \`${prefix}kick\` Sunucunuzda Belirtiğiniz Kişiyi Kickler `,true)
.addField(`__Unban__`,`:rocket:  \`${prefix}unban\`  Sunucunuzda Belirtiğiniz İD'nin Banını Açar`,true)
.addField(`__Mod Log__`,`:rocket:  \`${prefix}modlog\` Sunucunuzda Moderasyon Kayıtlarını Tuttar`,true)
.addField(`__Sayaç__`,`:rocket:  \`${prefix}sayaç\` Sunucunuzda Sayaç Tuttar`,true)
.addField(`__Uyarı__`,`:rocket:  \`${prefix}yardımuyarı\` Sunucunuza Gelişmiş Uyarı Sistemi`,true)
.addField(`__Sayaç Kapat__`,`:rocket:  \`${prefix}sayaç-kapat\` Sunucunuzun Sayaç Sistemini Kapattır`,true)
.addField(`__Ban Say__`,`:rocket:  \`${prefix}bansay \` Sunucunuzdan Kimlerin Banlandığını Görebilirsiniz`,true)
.addField(`__Banaffı__`,`:rocket:  \`${prefix}banaffı \` Sunucunuzdan Banlanan Herkesin Banını Açar `,true)
.addField(`__Yavaş Mod__`,`:rocket:  \`${prefix}yavaşmod \` Sunucunuzda Berirlenen Sohbete Yazma Delayı Koyabilirsiniz `,true)
.addField(`__Bilgilendirme__`,`:rocket:  \`${prefix}davet\` | Rainbow'u Sunucunuza Davet Edersiniz\n:rocket:  \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["moderasyon","ayarlar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'moderasyon'
  }; 
  