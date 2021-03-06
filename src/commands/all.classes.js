module.exports = {
  name: 'all',
  description: 'get all classes',
  execute(message) {
    message.channel.send(
      `This is a full schedule \n ${process.env.GOOGLE_SHEET}`,
    );
  },
};
