const getYearLabel = (n) => {
  if (n === 1) return "rok";
  const lastDigit = n % 10;
  const lastTwoDigits = n % 100;
  if (lastDigit >= 2 && lastDigit <= 4 && !(lastTwoDigits >= 12 && lastTwoDigits <= 14))
    return "lata";
  return "lat";
};

export const calculateDuration = (start, end) => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();

  const totalMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth()) +
    1;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts = [];
  if (years > 0) parts.push(`${years} ${getYearLabel(years)}`);
  if (months > 0) parts.push(`${months} mies.`);

  return parts.join(" i ");
};

export const formatDate = (dateStr) => {
  if (!dateStr) return "obecnie";
  const d = new Date(dateStr);
  return `${(d.getMonth() + 1).toString().padStart(2, "0")}.${d.getFullYear()}`;
};
