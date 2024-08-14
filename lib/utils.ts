import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import moment from "moment";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function showDate(date: string) {
  const originalDate = moment(date);
  const monthsDiff = moment().diff(originalDate, "months");
  const dateToDisplay =
    monthsDiff <= 5
      ? originalDate.fromNow()
      : originalDate.format("DD-MM-YYYY");
  return dateToDisplay;
}
export function showDateNative(createdAt:Date, updatedAt:Date) {
  const postDate = createdAt.toDateString()
  const postTime = createdAt.toTimeString()
  return `date: ${postDate}, time: ${postTime}`
}