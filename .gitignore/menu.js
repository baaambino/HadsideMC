const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";

client.login(process.env.TOKEN);

client.on("guildMemberAdd", user =>{
    let joinEmbed = new Discord.RichEmbed()
        .setColor("#8b11b6")
        .setAuthor(user.guild.name, user.guild.iconURL)
        .setDescription("Bienvenue " + user + "sur le serveur " + user.guild.name + "!")
        .setFooter("Cordialement HadsideMC Bot.")
    user.guild.channels.get("604278932392378369").send(joinEmbed)
    user.addRole("604279379354189825")
});

client.on("guildMemberRemove", user =>{
    user.guild.channels.get("604278932392378369").send ("Sniff..." + user.user.username + " a quitté le serveur ")
});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "site"){
        message.channel.send("https://hadside.fr/")
    }

});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "ip"){
        message.channel.send("play.hadside.fr")
    }

});
