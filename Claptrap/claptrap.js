const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready' , function ()
       {
        bot.user.setActivity('Borderlands 3')
       })

bot.on('message' , function (message)
       {
        let commandUsed = Play.parse(message)
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
        if (message.content === "Merci Claptrap !")
        {
              message.channel.send("Je t'en prie, mais ne me sous estime pas sbire")
        }
        if (message.content === "nez" || message.content === "Nez")
        {
              var date = new Date();
              var heure = date.getHours();
              var minutes = date.getMinutes();
              if (minutes === heure || minutes === (heure + 7)%24)
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
                     message.channel.send("bah non, idiot de sbire !");
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

bot.login('NTg2MjYwMTc2MjczOTMyMzA4.XP7Hjg.ww7OwxquCmjdyer1t4yL9-IqPBc')
