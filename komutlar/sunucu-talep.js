const Discord = require('discord.js');

exports.run = (client, message, args) => {
 message.delete();
    message.guild.createChannel(`yeni destek ${message.author.username}`, 'text').then(ch => {
        ch.overwritePermissions(message.member.roles.first(),{
            VIEW_CHANNEL: false,
        }).catch()
        message.guild.roles.forEach((role) => {
            if (role.hasPermission("KICK_MEMBERS")) {
                ch.overwritePermissions(role,{
                    VIEW_CHANNEL: true,
                }).catch()
                ch.overwritePermissions(message.author.id,{
                    VIEW_CHANNEL: true,
                }).catch()
            }
        })

        const embed = new Discord.RichEmbed()
        .setTitle(`DESTEK AÇAN KIŞININ ISMI ${message.author.username} !`)
        .setAuthor("Rainbow | Destek Sistemi")
        .setDescription("**Buradaki destek ekibimiz sizinle ilgilenecektir.\nDestek talebini iptal etmek için \`-iptal\` yazabilirsin!**")
        .setFooter('Rainbow | Destek Sistemi', client.user.avatarURL)
        .setColor('RANDOM')
        .setTimestamp()
        ch.send(embed).catch()
        ch.send("@here **YETKILILER DESTEK GELDI BAKIN**")
        ch.awaitMessages((msg)=> {
            if (msg.content === "-iptal") {
                ch.send("`Talebiniz İptal Ediliyor`").then(()=>{
                    setTimeout(()=> {
                        ch.delete().catch()
                    },1000)
                });
            }
        },{time:86400000})
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['talep'],
  permLevel: 0
};

exports.help = {
  name: 'canlı-destek',
  description: 'Destek talebi açar.',
  usage: 'canlı-destek'
};