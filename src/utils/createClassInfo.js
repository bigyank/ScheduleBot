const Discord = require('discord.js');

const createEmbed = (data) => {
  const rich = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(data.Title)
    .setURL(data.Link)
    .setDescription(data.Lecturer)
    .addFields(
      { name: 'Time', value: `${data.Start} - ${data.End}`, inline: true },
      {
        name: 'Type',
        value: data.Type,
        inline: true,
      },
      { name: 'Code', value: data.Code, inline: true },
      { name: 'Method', value: data.Method, inline: true },
      { name: 'Room', value: data.Room, inline: true },
    );
  // .setFooter('Some footer text here', 'https://i.imgur.com/XnKYG66.jpg');
  return rich;
};

module.exports = createEmbed;
