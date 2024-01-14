import {
  parseISO,
  format,
} from 'date-fns';

export const dateToFormat = dateString => {
  const inputDate = dateString ?? (new Date());
  return format(inputDate, "MMMM dd, yyyy h:mm a").toLowerCase();
};
