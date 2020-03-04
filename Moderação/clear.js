const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
 
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Permissão negada");
  if(!args[0]) return message.channel.send("Digite o numero de mensagens que deseja apagar!");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`${args[0]} mensagens foram apagadas.`).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "clear"
}