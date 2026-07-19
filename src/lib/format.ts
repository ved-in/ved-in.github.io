const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** "07.2026" - used in archive list rows. */
export function formatArchiveDate(date: Date): string {
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();
  return `${month}.${year}`;
}

/** "July 2026" - used in the detail page meta row. */
export function formatDetailDate(date: Date): string {
  return `${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

/** Newest first. */
export function byDateDesc<T extends { data: { date: Date } }>(a: T, b: T): number {
  return b.data.date.valueOf() - a.data.date.valueOf();
}
