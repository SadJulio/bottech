const Discord = require("discord.js")
const config = require("../config.json")

module.exports.run = async (Client, message, args) => {   
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Permissão negada");
    if (!message.guild) return;
    if (message.content.startsWith('!ban')) {
      const user = message.mentions.users.first();
     
      if (user) {
     
        const member = message.guild.member(user);
        if (member) {
 
        
          member.ban({
            reason: 'Eles quebraram uma regra, ou desrespeitaram usuarios!!!',
          }).then(() => {
            
            message.reply(`O usuario ${user.tag} foi banido com sucesso, por descumprir alguma regra!`);
          }).catch(err => {

            message.reply('Eu não posso banir esse usuario');
            
            console.error(err);
          });
        } else {
          
          message.reply('Esse usuario não esta no servidor!');
        }
      } else {
     
        message.reply('Você não mencionou o usuario que deseja banir!');
      }
    }
  };
      
module.exports.help = {
    name: "Ban"
}