const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Rainbow Sunucu Komutları`, client.user.avatarURL)
.setColor('RANDOM')
.setDescription(`:rocket:  Rainbow botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Duyuru__`,`:rocket:  \`${prefix}duyuru\` Sunucunzuda Duyuru Yaparsınız`,true)
.addField(`__Oylama__`,`:rocket:  \`${prefix}oylama\` Sunucunuzda Oylama Yaparsınız`,true)
.addField(`__Sohbet Aç__`,`:rocket:  \`${prefix}aç\`  Sunucunuzda Sohbet Açarsınız`,true)
.addField(`__Sohbet Kapat__`,`:rocket:  \`${prefix}kapat\` Sunucunuzda Sohbet Kapatırsınız `,true)
.addField(`__Sohbet Gizle__`,`:rocket:  \`${prefix}gizle\`  Sunucunuzda Sohbet Gizlerseiniz`,true)
.addField(`__Çekiliş__`,`:rocket:  \`${prefix}çekiliş\` Sunucunuzda Çekiliş Yaparsınız`,true)
.addField(`__Hızlı Çek__`,`:rocket:  \`${prefix}hızlıçek\` Sunucunuzda Hızlı Çekiliş Yaparsınız`,true)
.addField(`__Sunucu Bilgi__`,`:rocket:  \`${prefix}scbilgi\` Sunucunuzun Bilgileri`,true)
.addField(`__Sunucu Davet__`,`:rocket:  \`${prefix}sunucudavet \`Sunucunuzun Sınırsız Daveti `,true)
.addField(`__Canlı Destek__`,`:rocket:  \`${prefix}canlı-destek\` Sunucunuzda Canlı Destek `,true)
.addField(`__Odaya Çek__`,`:rocket:  \`${prefix}çek\` Sunucunuzda Berirlenen Kişiyi Ses'e Çekersiniz `,true)
.addField(`__Ban Sorgu__`,`:rocket:  \`${prefix}bansorgu\` Kişinin Neden Banlandığını Görürsünüz`,true)
.addField(`__Reklam Tara__`,`:rocket:  \`${prefix}reklam-tara\` Sunucunuzda Reklamları Tararsınız`,true)
.addField(`__Sesli Sustur__`,`:rocket:  \`${prefix}sesli-sustur\` Sunucunuzda Süreli Susturursunuz`,true)
.addField(`__Bilgilendirme__`,`:rocket:  \`${prefix}davet\` | Rainbow'u Sunucunuza Davet Edersiniz\n:rocket:  \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["sunucu","sunucu"], 
    permLevel: 0
  };
  exports.help = {
    name: 'sunucu'
  }; 
  