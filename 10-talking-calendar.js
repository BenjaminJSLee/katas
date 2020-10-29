const numToMonth = function(num) {
  let month = undefined;
  switch (Number(num)) {
  case 1:
    month = "January";
    break;
  case 2:
    month = "February";
    break;
  case 3:
    month = "March";
    break;
  case 4:
    month = "April";
    break;
  case 5:
    month = "May";
    break;
  case 6:
    month = "June";
    break;
  case 7:
    month = "July";
    break;
  case 8:
    month = "August";
    break;
  case 9:
    month = "September";
    break;
  case 10:
    month = "October";
    break;
  case 11:
    month = "November";
    break;
  case 12:
    month = "December";
    break;
  default:
    break;
  }
  return month;
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