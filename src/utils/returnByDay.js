const createEmbed = require('./createClassInfo');
const { returnRows } = require('../initSheet');

const compareDay = (day) => ({ Day }) => Day.toLowerCase().slice(0, 3) === day;

const returnByDay = async (day) => {
  const rows = await returnRows();
  const classes = rows.filter(compareDay(day));
  return classes.map(createEmbed);
};

module.exports = { returnByDay };
