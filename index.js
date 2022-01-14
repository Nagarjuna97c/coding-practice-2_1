var addDays = require("date-fns/addDays");

const date_1 = function (days) {
  let newDate = addDays(new Date(2020, 07, 22), days);
  return `${newDate.getDate()}-${
    "0" + newDate.getMonth()
  }-${newDate.getFullYear()}`;
};

module.exports = date_1;
