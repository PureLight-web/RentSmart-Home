export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function absoluteUrl(path: string, baseUrl: string) {
  const normalizedBase = baseUrl.replace(/\/$/, '');
  return `${normalizedBase}${path.startsWith('/') ? path : `/${path}`}`;
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC',
  }).format(date);
}

