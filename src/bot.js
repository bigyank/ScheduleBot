require('dotenv').config();
const schedule = require('node-schedule');
const fs = require('fs');
const Discord = require('discord.js');

const { getOnTime } = require('./utils/getOnTime');

const prefix = '?';

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync('./src/commands')
  .filter((file) => file.endsWith('.js'));

commandFiles.map((file) => {
  const command = require(`./commands/${file}`);
  return client.commands.set(command.name, command);
});

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity('?help', { type: 'WATCHING' });

  const channelToSend = client.channels.cache.find(
    (channel) => channel.name === 'alert',
  );
  /**
   * At minute 20 and 50 past every hour
   * from 6 through 20
   * on Sunday and every day-of-week
   * from Tuesday through Friday.
   */
  schedule.scheduleJob('20,50 6-20 * * 0,2-5', async () => {
    const richClasses = await getOnTime();
    if (richClasses.length) {
      channelToSend.send(
        '<@&814767960442535936> Heads up! Next Class in 10 minutes',
      );
    }
    richClasses.map((rclass) => channelToSend.send(rclass));
  });
});

// Create an event listener for messages
client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }
});

client.login(process.env.BOT_TOKEN);
