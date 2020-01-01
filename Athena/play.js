Command = require('./command')

module.exports = class Play extends Command
{
    static match (message)
    {
        return message.content == ('!p')
    }
    
    static action (message)
    {
        let voiceChannel = message.guild.channels.filter(function (channel) { return channel.type === 'voice' }).first()
        voiceChannel
        .join()
        .then(function (connection)
                                 {
                                    connection.playFile('./BloodyStream.mp3')
                                 })
        
    }
}