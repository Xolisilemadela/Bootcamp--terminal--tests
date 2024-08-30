
export default function isWeekday(day){
    var daysOfWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return day > daysOfWeeks[0] || day < daysOfWeeks[6];
  }
