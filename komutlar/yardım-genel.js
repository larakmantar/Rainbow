
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Rainbow Genel Komutlar`, client.user.avatarURL)
.setColor('RANDOM')
.setDescription(`:rocket:  Rainbow botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Davet__`,`:rocket:  \`${prefix}davet\` Botumuzun Davet Linkini Alıp Davet Edebilirsiniz`,true)
.addField(`__Hata Bildir__`,`:rocket:  \`${prefix}hata-bildir\` Botumuzun Hatalarını Bildirebilirsiniz`,true)
.addField(`__Profil__`,`:rocket:  \`${prefix}hata-bildir\` Kullanıcı Profilinizi Görebilirsiniz`,true)
.addField(`__Bot Bilgi__`,`:rocket:  \`${prefix}botbilgi\` Botumuzun İstatistiksel Bilgileri`,true)
.addField(`__Korona Bilgi__`,`:rocket:  \`${prefix}korona\` Korona İstatistiklerini Görebilirsiniz`,true)
.addField(`__Avatar__`,`:rocket:  \`${prefix}avatar\` Profil Fotoğrafınızı Görebilirsiniz`,true)
.addField(`__Yapımcım__`,`:rocket:  \`${prefix}yapımcım\` Beni Yapan Kişiyi Görebilirsiniz`,true)
.addField(`__Pixel__`,`:rocket:  \`${prefix}pixel\` Profil Fotoğrafınızı Pixel Yaparsınız`,true)
.addField(`__Zıt Renk__`,`:rocket:  \`${prefix}zıtrenk\` Profil Fotoğrafınızı Zıt Renk Yaparsınız`,true)
.addField(`__Rip Efekt__`,`:rocket:  \`${prefix}rip\` Profil Fotoğrafınızı Rip Efekti Yaparsınız`,true)
.addField(`__Wasted__`,`:rocket:  \`${prefix}rip\` Profil Fotoğrafınızı Wasted Efekti Yaparsınız`,true)
.addField(`__Taş Kağıt Makas__`,`:rocket:  \`${prefix}tkm\` Taş Kağıt Makas Oynarsınız`,true)
.addField(`__Bilgilendirme__`,`:rocket:  \`${prefix}davet\` | Rainbow'u Sunucunuza Davet Edersiniz\n:rocket:  \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["genel"], 
    permLevel: 0
  };
  exports.help = {
    name: 'genel'
  }; 
  