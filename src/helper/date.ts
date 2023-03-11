import moment from "moment";

export function convertDateToRelative(dateString: Date): string {
  let date = moment(dateString, "YYYY-MM-DD");
  let today = moment();
  let yesterday = moment().subtract(1, "day");

  if (date.isSame(today, "day")) {
    return "Today";
  } else if (date.isSame(yesterday, "day")) {
    return "Yesterday";
  } else {
    return date.format("Do MMMM");
  }
}
