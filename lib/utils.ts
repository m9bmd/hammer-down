import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function showDateNative(dateValue: Date) {
  const now = new Date();
  const diffInMs = now.getTime() - dateValue.getTime();
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  let timeDifference;
  if (diffInDays > 0) {
    timeDifference = `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  } else if (diffInHours > 0) {
    timeDifference = `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  } else if (diffInMinutes > 0) {
    timeDifference = `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
  } else {
    timeDifference = `${diffInSeconds} second${diffInSeconds > 1 ? 's' : ''} ago`;
  }

  return timeDifference;
}