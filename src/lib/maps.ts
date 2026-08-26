export function createMapSearchUrl(address: string) {
  const query = encodeURIComponent(`${address}، تهران`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
