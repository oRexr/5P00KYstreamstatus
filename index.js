var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("ready", () => {
  console.log("You are connected to " + bot.guilds.size + " servers!");
  bot.user.setGame("youtube.com/willnelson", "https://www.twitch.tv/wilplayzyt")
});



bot.login('MzczODQ5MTgyNDMzNDQzODQx.XNRn_Q.DAwxcuXHNjbSX_l1n9e6cwYB6EA'); 
