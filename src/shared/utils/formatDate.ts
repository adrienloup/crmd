export function formatDate(iso: string): string {
  const d = new Date(iso);
  return new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(d);
}
