const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTcyNDk5MTUzMTMzODk1Njk4.XMeCZQ.U1yYEdqshlNmiMMsNzvniAGA64o';

bot.login(token);

bot.on('ready', () => {
    bot.user.setGame('dm will for help')
  })