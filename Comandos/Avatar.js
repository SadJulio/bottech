const Discord = require("discord.js")
const config = require("../config.json")

module.exports.run = async (Client, message, args) => {
    if (message.content.startsWith(config.prefix + 'avatar')) {
        const user = message.mentions.users.first() || message.author;
        const avatarEmbed = new Discord.RichEmbed()
            .setColor(0x333333)
            .setAuthor(user.username)
            .setImage(user.avatarURL);
        message.channel.send(avatarEmbed);
    }}
module.exports.help = {
    name: "Avatar"
}