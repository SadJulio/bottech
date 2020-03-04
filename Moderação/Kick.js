const Discord = require("discord.js")
const config = require("../config.json")

module.exports.run = async (Client, message, args) => {     
        if (!message.guild) return;
        if (message.content.startsWith('!kick')) {
          if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Permissão negada");
          const user = message.mentions.users.first();
        
          if (user) {
           
            const member = message.guild.member(user);
           
            if (member) {
             kick('Optional reason that will display in the audit logs').then(() => {
                
                message.reply(`O usuario ${user.tag} Foi expulso com sucesso`);
              }).catch(err => {
                
                message.reply('Eu não posso expulsar este membro');
            
                console.error(err);
              });
            } else {
             
              message.reply('Este usuario não esta no servidor!');
            }
          
          } else {
            message.reply('Você não mencionou quem deseja expulsar!!');
          }
        }
        message.member.hasPermission("KICK_MEMBERS");return message.channel.send("Permissao negada")
      };
      
module.exports.help = {
    name: "kick"
}