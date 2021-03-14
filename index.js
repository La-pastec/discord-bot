const Discord = require("discord.js")
const { url } = require("inspector")

const Client = new Discord.Client

const prefix = "/"

channels = "813840188501262337"

Client.on("ready", () => {
    console.log("bot operationnel !")
})

Client.on("message", message => {
    if(message.author.bot)return
    if(message.channel.type == "dm")return

    if(message.content == prefix + "ping")
    message.channel.send("pong")
})

Client.on("guildMemberAdd" , member => {
    console.log("Un membre est arrivé")
    const newLocal = "Merci a toi d'avoir rejoind le serveur"
    member.send("Bienvenu sur le serveur, il te sufit juste que tu accepte le #réglement et tu pourra faire tes rôles.")
})

Client.on("guildMemberRemove", member => {
    console.log("Un membre nous a quitté")
})

Client.login("NzgzMDQwMTYyODU0NzMxODI3.X8U8-w.dGdSxGeIxg0XaNECzq1owiWFW30")