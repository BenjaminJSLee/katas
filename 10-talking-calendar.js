const numToMonth = function(num) {
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return months[Number(num) - 1];
};

const spokenDay = function(day) {
  let date = Number(day);
  if (Math.floor(date / 10) % 10 === 1) return day + "th";
  switch (date % 10) {
  case 1:
    date += "st";
    break;
  case 2:
    date += "nd";
    break;
  case 3:
    date += "rd";
    break;
  default:
    date += "th";
    break;
  }
  return date;
};

const talkingCalendar = function(date) {
  let yearMonthDay = date.split("/");
  return numToMonth(yearMonthDay[1]) + " " + spokenDay(yearMonthDay[2]) + ", " + yearMonthDay[0];
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));