export const dateToString = (date: string | Date, wHours?: boolean) => new Date(date).toLocaleString(
  "en-US",
  {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: wHours ? "numeric" : undefined,
  }
);
