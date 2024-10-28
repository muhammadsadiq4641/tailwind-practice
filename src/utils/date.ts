import {
  addDays,
  isValid,
  formatDistanceToNow,
  differenceInDays,
  fromUnixTime,
  getUnixTime,
} from "date-fns";
import { format } from "date-fns/format";

namespace DateUtils {
  export const DateFormat = {
    date: "MM/dd/yyyy",
    dateTime: "MMM dd, yyyy 'at' hh:mm a",
  };

  export function dateToString(
    date: Date,
    formatStr: string = DateFormat.date
  ): string {
    if (!date) return "";
    if (isValid(date)) {
      return format(date, formatStr);
    }
    return "";
  }

  // export function msToDate(ms: number): Date {
  //   return fromUnixTime(ms);
  // }

  // export function currentTime(): number {
  //   return Math.floor(Date.now() / 1000);
  // }
  // export function addDay(date: Date, day: number): Date {
  //   return addDays(date, day);
  // }

  // export function diff(date1: Date, date2: Date): number {
  //   return differenceInDays(date2, date1);
  // }

  // export function getDistanceInWord(date: Date): string {
  //   return formatDistanceToNow(date);
  // }

  // export function getUnixTimeStamp(): number {
  //   return getUnixTime(new Date());
  // }

  // export function convertDateToUnix(date: Date): number {
  //   return getUnixTime(date);
  // }

  // YYYY-MM-DDTHH:mm:ss.sssZ
  export function convertDateStringToFormattedDate(
    dateString: string,
    formatStr: string = DateFormat.dateTime
  ): string {
    let date = new Date(dateString);

    return isValid(date) ? format(date, formatStr) : "";
  }

  export function dateToCustomFormat(
    date: Date,
    formatStr: string = DateFormat.dateTime
  ): string {
    return isValid(date) ? format(date, formatStr) : "";
  }

  export function unixTimestampToString(timestamp: number): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };

    return new Date(timestamp * 1000).toLocaleString("en-US", options);
  }

  export function dateFormattedPlusDays(
    dateInSeconds: number,
    daysToAdd: number
  ): string {
    const date = new Date(dateInSeconds * 1000); // convert seconds to milliseconds
    const futureDate = new Date(date); // create a copy of the date

    futureDate.setDate(date.getDate() + daysToAdd); // add 'daysToAdd' to the date

    const options: Intl.DateTimeFormatOptions = {
      timeZone: "UTC",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const formattedDate = futureDate.toLocaleDateString("en-US", options); // format the future date string

    return formattedDate;
  }

  // export function createdFormated(dates: number): string {
  //   const date = new Date(dates); // convert seconds to milliseconds
  //   const options = {
  //     timeZone: "UTC",
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //     hour: "numeric",
  //     minute: "numeric",
  //     hour12: true,
  //   };
  //   const formattedDate = date.toLocaleDateString("en-US", options); // format date string
  //   return formattedDate;
  // }

  export function secondsToUtcTime(seconds: number): number {
    const date = new Date(seconds * 1000); // create a Date object from the number of seconds
    const utcSeconds = date.getTime() / 1000 - date.getTimezoneOffset() * 60;

    return utcSeconds;
  }

  // export function unixtimeStampToDateTime(unixTimestamp: number): string {
  //   const dateObject = new Date(unixTimestamp * 1000);
  //   const year = dateObject.getFullYear();
  //   const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  //   const date = String(dateObject.getDate()).padStart(2, "0");
  //   const hours = String(dateObject.getHours()).padStart(2, "0");
  //   const minutes = String(dateObject.getMinutes()).padStart(2, "0");

  //   return `${date}/${month}/${year} ${hours}:${minutes}`;
  // }

  // export function getTimeFromDateObj(dateObj: Date): string {
  //   const date = new Date(dateObj);
  //   const timeString = format(date, "h:mm a");
  //   return timeString;
  // }

  export function formatUnixTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}, ${formatTime(date)}`;
    return formattedDate;
  }

  export function formatTime(date: Date): string {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedTime = `${hours}:${minutes} ${ampm}`;
    return formattedTime;
  }

  // export function monthYear(createdAt: number): string {
  //   const monthNames = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "November",
  //     "December",
  //   ];

  //   // Make sure createdAt is a date object
  //   const date = new Date(createdAt);
  //   const monthName = monthNames[date.getMonth()];
  //   const year = date.getFullYear();

  //   // Create formatted date string
  //   const formattedDate = `${monthName} ${year}`;
  //   return formattedDate;
  // }
}

export default DateUtils;
