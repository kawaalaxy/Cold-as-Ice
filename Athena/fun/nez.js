
function nez (message)
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
module.exports =
{
  nez: nez
}
