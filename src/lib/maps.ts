export type MapProvider = "google" | "apple" | "neshan" | "balad";

export function createMapDirectionsUrl(
  provider: MapProvider,
  lat: string,
  lng: string,
) {
  const coordinates = `${lat},${lng}`;

  switch (provider) {
    case "google":
      return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(coordinates)}&dir_action=navigate`;
    case "apple":
      return `https://maps.apple.com/?daddr=${encodeURIComponent(coordinates)}&dirflg=d`;
    case "neshan":
      return `https://neshan.org/maps/@${coordinates},16z,0p`;
    case "balad": {
      const url = new URL("https://balad.ir/location");
      url.searchParams.set("latitude", lat);
      url.searchParams.set("longitude", lng);
      url.searchParams.set("zoom", "16");
      return url.toString();
    }
  }
}
