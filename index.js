var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("ready", () => {
  console.log("You are connected to " + bot.guilds.size + " servers!");
  bot.user.setGame("Hey There", "https://www.twitch.tv/wilplayzyt")
});



bot.login('NTc5MDU4NDA2Mjc5ODcyNTUw.XUBzPw.V0RcOt5MH9fjZ86Yip5Aru_bmvI'); 
