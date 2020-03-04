const Discord = require("discord.js")
const config = require("../config.json")

module.exports.run = async (Client, message, args) => {
    if(Comando === "say") {

        const sayMessage = args.join(" ");
        
        message.delete().catch(O_o=>{}); 
        
        message.channel.send(sayMessage);
      }
}
module.exports.help = {
    name: "Avatar"
}