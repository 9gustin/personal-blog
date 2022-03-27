export const dateToString = (date: string | Date, wLong?: boolean) => new Date(date).toLocaleString(
  "es",
  {
    day: "2-digit",
    month: wLong ? "2-digit" : "long",
    year: "numeric",
    hour12: true,
    hour: wLong ? "numeric" : undefined,
  }
);
