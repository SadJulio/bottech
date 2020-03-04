const Discord = require("discord.js")
const config = require("../config.json")

module.exports.run = async (Client, message, args) => {

        const m = await message.channel.send("<a:8072_Typing:681586132370194455> Calculando o seu ping!");


    
        m.edit(`<a:onlineGIF:672476470920347685> Pong! A latencia é ${m.createdTimestamp - message.createdTimestamp}ms.
        
        
<a:onlineGIF:672476470920347685>  A latencia da API é  ${Math.round(Client.ping)}ms`);
      


module.exports.help = {
    name: "Ping"
}}