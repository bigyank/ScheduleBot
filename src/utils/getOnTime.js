const { returnRows } = require('../initSheet');
const createEmbed = require('./createClassInfo');

const days = [
  'Sunday',
  'Monday',
  'Tueday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const getClassByTime = (time, weekday) => ({ Start, Day }) =>
  Start === `${time.getHours().toString()}:${time.getMinutes().toString()}` &&
  Day === weekday;

const getOnTime = async () => {
  const newDateObj = new Date(new Date().getTime() + 10 * 60000);
  const weekday = days[new Date().getDay()];
  const rows = await returnRows();
  const classesNext = rows.filter(getClassByTime(newDateObj, weekday));
  return classesNext.map(createEmbed);
};

module.exports = { getOnTime };
