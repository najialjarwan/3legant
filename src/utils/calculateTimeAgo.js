export const calculateTimeAgo = (dateString) => {
  if (!dateString) return ''; // or 'no date'

  const now = new Date();
  const posted = new Date(dateString);

  if (isNaN(posted)) return ''; // invalid date

  const seconds = Math.floor((now - posted) / 1000);

  // handle future dates gracefully
  if (seconds < 0) return 'in the future';

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return count === 1
        ? `about 1 ${interval.label} ago`
        : `about ${count} ${interval.label}s ago`;
    }
  }

  return 'just now';
};
