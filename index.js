var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("ready", () => {
  console.log("You are connected to " + bot.guilds.size + " servers!");
  bot.user.setGame("Hey There", "https://www.twitch.tv/wilplayzyt")
});



bot.login('NjAyNjE0NTQ1MTIyMzI4NTk0.XUBweA.OtvF_-ZxfCHEnMbFz9gj-lX__RE'); 
