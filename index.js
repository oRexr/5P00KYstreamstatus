var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("ready", () => {
  console.log("You are connected to " + bot.guilds.size + " servers!");
  bot.user.setGame("Hey There", "https://www.twitch.tv/oRexrHD")
});



bot.login('MTYzNzQ0MjU1MDYyNDQxOTg0.XUa_Og.tI82kPE_PguDZMrIVvxP5BEUCqQ'); 
