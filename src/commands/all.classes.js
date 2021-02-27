module.exports = {
  name: 'all',
  description: 'get all classes',
  execute(message) {
    message.channel.send(
      'This is a full schedule \n https://docs.google.com/spreadsheets/d/1j0g6pypfi32gksmdCen50T9wBwKu6P0CA9Brlz3GsqA/edit?usp=sharing',
    );
  },
};
