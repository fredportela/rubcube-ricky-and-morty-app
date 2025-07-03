export function formatAirDate(air_date: string): string {
  if (!air_date) return '';
  try {
    const [monthStr, dayStr, yearStr] = air_date.replace(',', '').split(' ');
    const day = dayStr.padStart(2, '0');
    const monthMap: any = {
      January: '01', February: '02', March: '03', April: '04',
      May: '05', June: '06', July: '07', August: '08',
      September: '09', October: '10', November: '11', December: '12'
    };
    const month = monthMap[monthStr] || '01';
    return `${day}/${month}/${yearStr}`;
  } catch (e) {
    return air_date; // fallback
  }
}
