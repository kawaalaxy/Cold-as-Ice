const Discord = require('discord.js')
const bot = new Discord.Client()
const Commande = '!dis '
const CommandeV = '!joue '
const CommandeQ = '!pars'
const Commandetts = '!tts '
const YTDL = require('ytdl-core')

function play(connection, message, serveur)
{
  connection.playStream(YTDL(message,{filter: "audioonly"}))
}

bot.on('ready' , function ()
       {
        bot.user.setActivity('recherche des anciens agents overwatch')
       })


bot.on('message', message => {
  if (message.content.startsWith(CommandeV)) {
    const str = message.content.substring(CommandeV.length)
    if (!message.member.voiceChannel)
    {
      message.channel.send("Vous devez être en vocal")
      return
    }

    var serveur = message.guild.id

    if (!message.guild.voiceConnection)
    {
      message.member.voiceChannel.join

      (function (connection)
                                 {
                                    connection.playFile(YTDL(str,{filter: "audioonly"}))

                                 })

    }
  }
});
bot.on('message', message => {
  if (message.content.startsWith(CommandeQ)) {
    message.member.voiceChannel.leave()
  }
  })


bot.on('message', message => {
  if (message.content.startsWith(Commande)) {
    const str = message.content.substring(Commande.length)
    bot.channels.find("name","general").send(str)
  }
});

bot.on('message', message => {
  if (message.content.startsWith(Commandetts)) {
    const str = message.content.substring(Commandetts.length)
    bot.channels.find("name","general").send(str, {tts: true})
  }
});


bot.on('presenceUpdate', async (oldMember, newMember) => {
  console.log('Presence:', newMember.presence)

  if (!newMember.voiceChannel) {
    return
  }

  const connection = await newMember.voiceChannel.join()

  connection.on('speaking', (user, speaking) => {
    if (speaking) {
      console.log(`I'm listening to ${user.username}`)
    } else {
      console.log(`I stopped listening to ${user.username}`)
    }
  })
})

bot.on('message' , function (message)
       {
        if (message.content != '')
        {
              var rand = Math.floor(Math.random() * 10) + 1 ;
              if (rand === 2)
              {
                     message.reply('tu tournes')
              }
        }
        if (message.content === 'je sais tout')
        {
            message.channel.send('Ah oui ? Et la capitale de la Colombie ?')
        }
        if (message.content === 'Bogota')
        {
            message.channel.send("Mon dieu mais c'est vrai il sait **Tout** !")
        }
        if (message.content === "Merci Athena !")
        {
              message.channel.send("tout le plaisir est pour moi")
        }
        if (message.content === "nez" || message.content === "Nez")
        {
              var date = new Date();
              var heure = date.getHours();
              var minutes = date.getMinutes();
              if (minutes === heure)
              {
                      message.react('👃')
                     .then(console.log)
                     .catch(console.error);
                     message.react('👌')
                     .then(console.log)
                     .catch(console.error);
                     message.channel.send("Bravo !");
              }
              else
              {
                     var delta = minutes - heure;
                     message.react('👎')
                     .then(console.log)
                     .catch(console.error);
                     message.channel.send("il faudrait être un peu plus dans les temps");
                     if (delta < 0)
                     {
                            delta = -delta
                            message.channel.send("tu as " + delta.toString() + " minutes d'avance")
                     }
                     else
                     {
                            message.channel.send("tu as " + delta.toString() + " minutes de retard")
                     }
              }
        }
       })

bot.login('NjMzMzgwMzYxODQ1NjA0Mzkw.XaTJIQ.MrfJmSXs7ylEzONhCX-r6sFDmMc')
