const Discord = require('discord.js');

const client = new Discord.Client({ 
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

const fs = require('fs');

const prefix = 'n!'

client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity("Made by Hanako#0007 <3", {
    type: "PLAYING"
  });
});


client.on('message', message => {

    if(message.content.toLowerCase().includes('am I loved?')) {
        message.channel.send('yes you are !')
    } else if(message.content.toLowerCase().includes('ily')) {
        message.channel.send('ilyt as well as you should love & accept yourself ! ')
    } else if(message.content.toLowerCase().includes('members?')) {
        message.channel.send(`we have this many qts ! **${message.guild.memberCount}**`)
    }
});

//made by Hanako#0007 !

client.login('token-goes-here');
