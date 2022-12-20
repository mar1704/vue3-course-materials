import { formatAsIsoDate, formatAsLocalDate } from '../utils/dateFormatters.js';

// Пример бесполезного "composable"
// Эти методы можно импортировать напрямую, без лишней прослойки
export function useDateFormatters() {
  return {
    formatAsLocalDate,
    formatAsIsoDate,
  };
}
