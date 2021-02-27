const Discord = require('discord.js');
const { returnByDay } = require('../utils/returnByDay');

const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const weekday = days[new Date().getDay()];

const returnRichClass = async (message, day) => {
  const richClasses = await returnByDay(day);
  if (richClasses.length === 0) {
    const celebrate = new Discord.MessageEmbed()
      .setTitle('no classes, yayy!')
      .setImage('https://media.giphy.com/media/kyLYXonQYYfwYDIeZl/source.gif');

    return message.channel.send(celebrate);
  }
  return richClasses.map((richClass) => message.channel.send(richClass));
};

module.exports = {
  name: 'class',
  description: 'get all classes of current date',
  async execute(message, args) {
    if (!args.length || !days.includes(args[0].toLowerCase())) {
      returnRichClass(message, weekday);
    } else {
      returnRichClass(message, args[0].toLowerCase().slice(0, 3));
    }
  },
};
