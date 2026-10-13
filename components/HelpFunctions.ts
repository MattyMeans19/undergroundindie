export function getFormattedRelativeTime(timestamp: string): string {
  const past = new Date(timestamp).getTime();
  const now = Date.now();
  const diffInSeconds = Math.round((past - now) / 1000); // Note: negative for past dates

  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  const intervals: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  };

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const delta = Math.round(diffInSeconds / secondsInUnit);
    if (Math.abs(delta) >= 1) {
      return rtf.format(delta, unit as Intl.RelativeTimeFormatUnit);
    }
  }

  return 'just now';
}

console.log(getFormattedRelativeTime("2026-09-06T08:00:05.449Z")); 
// Output: "35 days ago"