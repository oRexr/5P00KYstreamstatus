const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTcyNDk5MTUzMTMzODk1Njk4.XNIeWQ.bGxAmV7GjVkhpNMe2BnX30a9_GA';

bot.login(token);

bot.on('ready', () => {
    bot.user.setGame('DM Will For Help')
  })
if(command === '+help') {
  message.channel.send('If Jimmy Dean is away right now, you can DM him or Will for help!');
} else
if (command === 'blah') {
  message.channel.send('Meh.');
}
