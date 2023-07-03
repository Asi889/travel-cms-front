export const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const compareDates = (date1: Date, date2: Date) => {
  return date1.getTime() === date2.getTime();
};
