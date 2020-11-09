const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Rainbow Eklenti Menüsü`, client.user.avatarURL)
.setColor('RANDOM')
.setDescription(`:rocket:  Rainbow botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Davet Kanal__`,`:rocket:  \`${prefix}davet-kanal\` Davet Kanalı Belirlersin`,true)
.addField(`__Davet Ekle__`,`:rocket:  \`${prefix}davet-ekle\` Seçilen Kullanıcıya Davet Ekler`,true)
.addField(`__Davet Sil__`,`:rocket:  \`${prefix}davet-sil\` Seçilen Kullanıcının Davetlerini Silersiniz`,true)
.addField(`__Davet Sıfırla__`,`:rocket:  \`${prefix}davet-sıfırla\` Herkesin Davetini Sıfırlarsınız`,true)
.addField(`__Davet Kanal Sıfırla__`,`:rocket:  \`${prefix}davet-kanal-sıfırla\` Davet Kanalını Sıfırlarsınız`,true)
.addField(`__Davetler__`,`:rocket:  \`${prefix}davetler\` Davetlerinizi Görürsünüz`,true)
.addField(`__Bilgilendirme__`,`:rocket:  \`${prefix}davet\` | Rainbow'u Sunucunuza Davet Edersiniz\n:rocket:  \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["invite"], 
    permLevel: 0
  };
  exports.help = {
    name: 'invite'
  }; 
  