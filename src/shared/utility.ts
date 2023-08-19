export interface LatitudeLongitude {
  lat: number
  long: number
}

export const ShopLocation: LatitudeLongitude = { lat: 34.135453487695465, long: -117.55773125689538 }

/** Calculate the distance between two latitude/longitude points in miles.
 *  This makes use of the haversine formula, and is based on
 *    https://www.movable-type.co.uk/scripts/latlong.html implementation */
export function calculateDistanceMiles(latLong1: LatitudeLongitude, latLong2: LatitudeLongitude): number {
  const R = 6371e3 // metres
  const φ1 = (latLong1.lat * Math.PI) / 180 // φ, λ in radians
  const φ2 = (latLong2.lat * Math.PI) / 180
  const Δφ = ((latLong2.lat - latLong1.lat) * Math.PI) / 180
  const Δλ = ((latLong2.long - latLong1.long) * Math.PI) / 180

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  const d = R * c // in metres
  const meter2miles = 1609.34
  return d / meter2miles
}

export function errorLogger(tag: string, message: string) {
  console.error(`${tag}: ${message}`)
}

export function warningLogger(tag: string, message: string) {
  console.warn(`${tag}: ${message}`)
}
