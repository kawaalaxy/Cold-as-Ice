const Discord = require('discord.js')
const fs = require('fs')

const fichier = JSON.parse(fs.readFileSync("../../Athena.json"))
const bot = new Discord.Client()
const Commande = '!dis '
const CommandeV = '!joue '
const CommandeQ = '!pars'
const Commandetts = '!tts '
const ytdl = require('ytdl-core')
var chansons = []


bot.on('message', async message => {
  if (message.content.startsWith(CommandeV))
  {
    const args = message.content.split(' ');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.channel.send("Désolée mais il faut être en vocal pour me faire venir");
    try
    {
      var connection = await voiceChannel.join();
    } catch (error)
    {
      console.error("je n'ai pas pu rejoindre le vocal");
      return message.channel.send("je n'ai pas pu rejoindre le vocal");
    }
    const dispatcher = connection.playStream(ytdl(args[1]))

    dispatcher.setVolumeLogarithmic(5 / 5);
  }
})


bot.on('ready' , function ()
       {
        bot.user.setActivity('recherche des anciens agents overwatch')
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

bot.on('message' , function (message)
       {
        if (message.content != '')
        {
              var rand = Math.floor(Math.random() * 30) + 1 ;
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

bot.login(fichier.token)
