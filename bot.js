const Discord = require("discord.js");
const Client = new Discord.Client();
const config = require ("./config.json");
const token = process.env.token;

Client.on("ready", () => {
    console.log(`${Client.user.username} foi iniciado com sucesso, com ${Client.users.size} usuários, em ${Client.channels.size} canais, em ${Client.guilds.size} servidores.`);
    let status = [
        {name: `Estou servindo ${Client.guilds.size} servidores, que fazem parte da minha beta`, type: 'Watching'},
        {name: `Meu prefixo é c!`, type: 'Watching'},
        {name: `Estou em desenvolvimento!`, type: 'Watching'}
    ]
    function setStatus(){
        let randomStatus = status[Math.floor(Math.random()*status.length)]
        Client.user.setPresence({game: randomStatus})
    }
    setStatus()
    setInterval(() => setStatus(),300000)
});
Client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
    if (!message.content.toLowerCase().startsWith(config.prefix)) return;
    
    var comando = message.content.toLowerCase().split(" ")[0];
    comando = comando.slice(config.prefix.length);

    var args = message.content.split(" ").slice(1);
    try {
        var arquivoComando = require(`./Comandos/${comando}.js`)
        arquivoComando.run(Client, message, args);
    } catch (erro) {
        if (erro.code == "MODULE_NOT_FOUND") return;
        console.log(erro);
    }

})
Client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
    if (!message.content.toLowerCase().startsWith(config.prefix)) return;
    
    var comando = message.content.toLowerCase().split(" ")[0];
    comando = comando.slice(config.prefix.length);

    var args = message.content.split(" ").slice(1);
    try {
        var arquivoComando = require(`./Moderação/${comando}.js`)
        arquivoComando.run(Client, message, args);
    } catch (erro) {
        if (erro.code == "MODULE_NOT_FOUND") return;
        console.log(erro);
    }

})

Client.login(token);