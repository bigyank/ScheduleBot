const Discord = require('discord.js');

module.exports = {
  name: 'help',
  description: 'get all commands',
  execute({ channel }) {
    const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .addFields(
        { name: 'all', value: 'returns complete schedule' },
        {
          name: 'class [args]',
          value:
            'returns class for today or according to day passed \n accepted args are first 3 letters of week name e.g. sun, mon and so on',
        },
      );

    channel.send(exampleEmbed);
  },
};
