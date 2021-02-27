const { returnRows } = require('../initSheet');
const createEmbed = require('./createClassInfo');

const getClassByTime = (time) => ({ Start }) =>
  Start === `${time.getHours().toString()}:${time.getMinutes().toString()}`;

const getOnTime = async (newDateObj) => {
  const rows = await returnRows();
  const classesNext = rows.filter(getClassByTime(newDateObj));
  return classesNext.map(createEmbed);
};

module.exports = { getOnTime };
