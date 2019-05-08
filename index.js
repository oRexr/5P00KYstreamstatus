const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTcyNDk5MTUzMTMzODk1Njk4.XNIeWQ.bGxAmV7GjVkhpNMe2BnX30a9_GA';

bot.login(token);

bot.on('ready', () => {
    bot.user.setGame('dm will for help')
  })
