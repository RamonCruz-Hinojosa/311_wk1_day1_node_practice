const moment = require("moment");
// import moment here; use this package in each function

const today = () => {
  return moment().format(`dddd`);
  // write code for dates.today
};

const calendar = () => {
  return moment().format(`MMM DD, YYYY`);
  // write code for dates.calendar
};

const currentTime = () => {
  return moment().format(`hh:mm:ss A`);
  // write code for dates.currentTime
};

module.exports = {
  today,
  calendar,
  currentTime,
};
